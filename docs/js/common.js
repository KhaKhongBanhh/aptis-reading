/* Hàm dùng chung cho cả 3 trang */
window.EXAMS = window.EXAMS || {};

const EXAM_IDS = [0, 1, 2, 3, 4];
const FINAL_ID = "final";
const STATE_KEY = (id) => `aptis_state_${id}`;
const RESULT_KEY = "aptis_result";

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/* Nạp file data/deX.js bằng thẻ <script> (chạy được cả khi mở file trực tiếp) */
function loadExamData(id) {
  return new Promise((resolve, reject) => {
    if (window.EXAMS[id]) return resolve(window.EXAMS[id]);
    const s = document.createElement("script");
    s.src = `data/de${id}.js`;
    s.onload = () => (window.EXAMS[id] ? resolve(window.EXAMS[id]) : reject(new Error("Không có dữ liệu")));
    s.onerror = () => reject(new Error("Không tìm thấy file đề"));
    document.head.appendChild(s);
  });
}

function partSize(p) {
  switch (p.type) {
    case "fill": return p.items.length;
    case "order": return p.answer.length;
    case "match": return p.questions.length;
    case "heading": return p.paragraphs.length;
    default: return 0;
  }
}
const totalQuestions = (exam) => exam.parts.reduce((s, p) => s + partSize(p), 0);
const emptyAnswers = (exam) => exam.parts.map((p) => Array(partSize(p)).fill(""));
const normalize = (s) => String(s ?? "").trim().toLowerCase().replace(/\s+/g, " ");
const isAnswered = (v) => normalize(v) !== "";

function fmtTime(sec) {
  sec = Math.max(0, Math.ceil(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function readState(id) {
  try { return JSON.parse(sessionStorage.getItem(STATE_KEY(id))); } catch (e) { return null; }
}
const writeState = (id, st) => sessionStorage.setItem(STATE_KEY(id), JSON.stringify(st));
const clearState = (id) => sessionStorage.removeItem(STATE_KEY(id));

/* Chấm điểm: trả về từng câu (đáp án bạn chọn / đáp án đúng / đúng-sai) */
function gradeExam(exam, answers) {
  const parts = exam.parts.map((p, i) => {
    const a = answers[i] || [];
    let rows = [];

    if (p.type === "fill") {
      rows = p.items.map((it, j) => ({
        label: j + 1,
        question: `${it.before} ______ ${it.after}`,
        user: (a[j] || "").trim(),
        correct: it.answer,
        ok: normalize(a[j]) === normalize(it.answer)
      }));
    } else if (p.type === "order") {
      rows = p.answer.map((key, j) => ({
        label: `Câu số ${j + (p.first ? 2 : 1)}`,
        user: a[j] ? `${a[j]}. ${p.sentences[a[j]]}` : "",
        correct: `${key}. ${p.sentences[key]}`,
        ok: a[j] === key
      }));
    } else if (p.type === "match") {
      rows = p.questions.map((q, j) => ({
        label: j + 1,
        question: q.text,
        user: a[j] ? `Person ${a[j]}` : "",
        correct: `Person ${q.answer}`,
        ok: a[j] === q.answer
      }));
    } else if (p.type === "heading") {
      const h = (n) => (n ? `${n}. ${p.headings[n - 1]}` : "");
      rows = p.paragraphs.map((pg, j) => ({
        label: `Đoạn ${pg.key}`,
        question: pg.text,
        user: h(Number(a[j])),
        correct: h(pg.answer),
        ok: Number(a[j]) === pg.answer
      }));
    }

    const score = rows.filter((r) => r.ok).length;
    return { part: p, rows, score, max: rows.length };
  });

  return {
    parts,
    score: parts.reduce((s, p) => s + p.score, 0),
    max: parts.reduce((s, p) => s + p.max, 0)
  };
}

/* ================= ĐỀ TỔNG HỢP (FINAL) ================= */
const LETTERS = "ABCDEFGHIJ";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const clone = (o) => JSON.parse(JSON.stringify(o));

/* Đảo vị trí câu hỏi + đáp án trong 1 part, đáp án đúng được tính lại theo vị trí mới */
function shufflePart(src) {
  const p = clone(src);

  if (p.type === "fill") {
    // đảo thứ tự 5 câu + đảo thứ tự 3 lựa chọn trong mỗi câu
    p.items = shuffle(p.items).map((it) => ({ ...it, options: shuffle(it.options) }));
  }

  if (p.type === "order") {
    // đảo vị trí các câu rồi đặt lại chữ A–E (tránh trường hợp đáp án thành A-B-C-D-E)
    const oldKeys = Object.keys(p.sentences);
    let keys, answer;
    do {
      keys = shuffle(oldKeys);
      const map = {};
      keys.forEach((k, i) => (map[k] = LETTERS[i]));
      answer = p.answer.map((k) => map[k]);
    } while (answer.join("") === LETTERS.slice(0, answer.length));
    const sentences = {};
    keys.forEach((k, i) => (sentences[LETTERS[i]] = p.sentences[k]));
    p.sentences = sentences;
    p.answer = answer;
  }

  if (p.type === "match") {
    // đảo vị trí 4 người (đặt lại A–D) + đảo thứ tự 7 câu hỏi
    const people = shuffle(p.people);
    const map = {};
    people.forEach((pp, i) => (map[pp.key] = LETTERS[i]));
    p.people = people.map((pp, i) => ({ ...pp, key: LETTERS[i] }));
    p.questions = shuffle(p.questions).map((q) => ({ ...q, answer: map[q.answer] }));
  }

  if (p.type === "heading") {
    // đảo danh sách tiêu đề (đánh số lại) + đảo thứ tự đoạn văn (đặt lại A–G)
    const order = shuffle(p.headings.map((_, i) => i + 1)); // order[vị trí mới] = số cũ
    const map = {};
    order.forEach((oldNo, i) => (map[oldNo] = i + 1));
    p.headings = order.map((oldNo) => src.headings[oldNo - 1]);
    p.paragraphs = shuffle(p.paragraphs).map((pg, i) => ({ ...pg, key: LETTERS[i], answer: map[pg.answer] }));
  }

  return p;
}

/* Mỗi part lấy ngẫu nhiên từ 1 trong các đề đang có, sau đó đảo vị trí */
function buildFinalExam() {
  return Promise.allSettled(EXAM_IDS.map(loadExamData)).then((rs) => {
    const exams = rs.filter((r) => r.status === "fulfilled").map((r) => r.value);
    if (!exams.length) throw new Error("Chưa có đề nào");
    const nParts = Math.max(...exams.map((e) => e.parts.length));
    const parts = [];
    for (let i = 0; i < nParts; i++) {
      const pool = exams.filter((e) => e.parts[i]);
      const pick = pool[Math.floor(Math.random() * pool.length)];
      parts.push({ ...shufflePart(pick.parts[i]), source: pick.id });
    }
    return { id: FINAL_ID, title: "FINAL EXAM - ĐỀ TỔNG HỢP", duration: 35, parts };
  });
}
