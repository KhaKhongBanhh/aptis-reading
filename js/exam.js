/* Trang làm bài: hiển thị các bài, kéo thả, đồng hồ, nộp bài */
(function () {
  const $ = (s) => document.querySelector(s);
  const rawId = new URLSearchParams(location.search).get("de") ?? "0";
  const isFinal = rawId === FINAL_ID;
  const id = isFinal ? FINAL_ID : Number(rawId);

  let exam, state;
  let current = 0;
  let selected = null; // chọn bằng click (dùng cho điện thoại): {part, key, from}
  let timerId = null;
  let submitted = false;

  // Đề tổng hợp: đang làm dở thì dùng lại đề đã sinh (F5 không đổi đề), chưa có thì sinh mới
  function getExam() {
    if (!isFinal) return loadExamData(id);
    const st = readState(id);
    return st && st.exam ? Promise.resolve(st.exam) : buildFinalExam();
  }

  getExam()
    .then(init)
    .catch(() => {
      document.body.innerHTML = `
        <div class="empty-page">
          <h2>${isFinal ? "Chưa có đề nào để tạo đề tổng hợp" : `Đề ${esc(id)} chưa có dữ liệu`}</h2>
          <a class="btn btn-primary" href="index.html">Về trang chủ</a>
        </div>`;
    });

  /* ================= KHỞI TẠO ================= */
  function init(data) {
    exam = data;
    state = readState(id);
    const valid = state && Array.isArray(state.answers) && state.answers.length === exam.parts.length;
    if (!valid) {
      const now = Date.now();
      state = { startTime: now, endTime: now + exam.duration * 60 * 1000, answers: emptyAnswers(exam), current: 0 };
      if (isFinal) state.exam = exam;
      save();
    }

    document.title = exam.title;
    $("#examTitle").textContent = exam.title;

    renderParts();
    renderTabs();
    showPart(state.current || 0);
    bindGlobal();

    tick();
    timerId = setInterval(tick, 500);
  }

  const save = () => writeState(id, state);

  function changed() {
    save();
    renderTabs();
  }

  /* ================= ĐỒNG HỒ ================= */
  function tick() {
    const remain = (state.endTime - Date.now()) / 1000;
    const el = $("#timer");
    el.textContent = fmtTime(remain);
    el.classList.toggle("warning", remain <= 300);
    if (remain <= 0) submit(true);
  }

  /* ================= TAB CÁC BÀI ================= */
  function answeredCount(i) {
    return state.answers[i].filter(isAnswered).length;
  }

  function renderTabs() {
    $("#partTabs").innerHTML = exam.parts
      .map((p, i) => {
        const done = answeredCount(i), n = partSize(p);
        const cls = ["tab", i === current ? "active" : "", done === n ? "complete" : ""].join(" ");
        return `<button class="${cls}" data-tab="${i}">Bài ${i + 1}<small>${done}/${n}</small></button>`;
      })
      .join("");
  }

  function showPart(i) {
    current = Math.max(0, Math.min(i, exam.parts.length - 1));
    state.current = current;
    save();
    document.querySelectorAll(".part").forEach((el) => (el.hidden = Number(el.dataset.part) !== current));
    $("#prevBtn").disabled = current === 0;
    $("#nextBtn").disabled = current === exam.parts.length - 1;
    renderTabs();
    window.scrollTo({ top: 0 });
  }

  /* ================= HIỂN THỊ CÁC BÀI ================= */
  function renderParts() {
    $("#parts").innerHTML = exam.parts
      .map((p, i) => {
        const r = { fill: renderFill, order: renderOrder, match: renderMatch, heading: renderHeading }[p.type];
        return `<section class="part" data-part="${i}" hidden>${r(p, i)}</section>`;
      })
      .join("");

    exam.parts.forEach((p, i) => {
      if (p.type === "order") {
        renderOrderRight(i);
        bindOrder(i);
      }
    });
  }

  const leftHead = (p) => `
    <h2 class="part-title">${esc(p.title)}</h2>
    <p class="part-sub">${esc(exam.title)}${p.source != null ? ` · Lấy từ Đề ${p.source}` : ""}</p>`;

  /* ---- Bài dạng điền từ ---- */
  function renderFill(p, i) {
    const a = state.answers[i];
    return `
      <div class="col-left">
        ${leftHead(p)}
        <table class="opt-table">
          <thead><tr><th>Khoảng trống</th><th colspan="3">Các đáp án lựa chọn</th></tr></thead>
          <tbody>
            ${p.items.map((it, j) => `<tr><td>${j + 1}</td>${it.options.map((o) => `<td>${esc(o)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
        <p class="instruction-vi">Chọn 1 trong 3 đáp án phù hợp để điền vào ${p.items.length} khoảng trống trong đoạn văn</p>
      </div>
      <div class="col-right">
        <p class="instruction">${esc(p.instruction)}</p>
        ${(p.intro || []).map((t) => `<p>${esc(t)}</p>`).join("")}
        ${p.items
          .map(
            (it, j) => `
          <p class="fill-line">
            ${esc(it.before)} <span class="num">${j + 1}</span>
            <input type="text" class="blank" data-q="${j}" value="${esc(a[j])}" autocomplete="off" spellcheck="false" />
            ${esc(it.after)}
          </p>`
          )
          .join("")}
        ${(p.outro || []).map((t) => `<p>${esc(t)}</p>`).join("")}
      </div>`;
  }

  /* ---- Bài dạng sắp xếp (kéo thả) ---- */
  function renderOrder(p) {
    return `
      <div class="col-left">
        ${leftHead(p)}
        <p class="instruction">${esc(p.instruction)}</p>
        <p class="topic">Topic: ${esc(p.topic)}</p>
        <p class="instruction-vi">Sắp xếp các câu theo một trật tự chính xác để hình thành một bài viết hoàn chỉnh và logic.${p.first ? " (Câu số 1 đã được cho sẵn)" : ""}</p>
        <p class="hint">💡 Kéo câu ở cột bên phải thả vào ô trả lời. Trên điện thoại: bấm vào câu rồi bấm vào ô.</p>
      </div>
      <div class="col-right"></div>`;
  }

  function isSel(i, key, from) {
    return selected && selected.part === i && selected.key === key && String(selected.from) === String(from);
  }

  function renderOrderRight(i) {
    const p = exam.parts[i];
    const a = state.answers[i];
    const used = new Set(a.filter(Boolean));
    const el = document.querySelector(`.part[data-part="${i}"] .col-right`);

    el.innerHTML = `
      <div class="order-grid">
        <div class="slots">
          ${p.first ? `<p class="first"><b>Câu số 1:</b> ${esc(p.first)}</p>` : ""}
          ${a
            .map(
              (k, j) => `
            <div class="slot-label"><span class="num">${j + 1}</span>. Câu số ${j + (p.first ? 2 : 1)}</div>
            <div class="slot ${k ? "filled" : ""}" data-slot="${j}">
              ${
                k
                  ? `<div class="card in-slot ${isSel(i, k, j) ? "selected" : ""}" draggable="true" data-key="${k}" data-from="${j}">
                       <span class="badge">${k}</span><span class="txt">${esc(p.sentences[k])}</span>
                       <button class="remove" data-remove="${j}" title="Bỏ câu này">×</button>
                     </div>`
                  : `<span class="ph">Your answer here:</span>`
              }
            </div>`
            )
            .join("")}
        </div>
        <div class="pool">
          <p class="pool-title">Kéo đáp án vào phần trả lời</p>
          ${Object.keys(p.sentences)
            .map(
              (k) => `
            <div class="card ${used.has(k) ? "used" : ""} ${isSel(i, k, "pool") ? "selected" : ""}"
                 draggable="${!used.has(k)}" data-key="${k}" data-from="pool">
              <span class="badge">${k}</span><span class="txt">${esc(p.sentences[k])}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  }

  function place(i, key, from, to) {
    const a = state.answers[i];
    if (from !== "pool") {
      const f = Number(from);
      if (f !== to) {
        a[f] = a[to] || ""; // đổi chỗ 2 ô
        a[to] = key;
      }
    } else {
      const old = a.indexOf(key);
      if (old > -1) a[old] = "";
      a[to] = key; // câu cũ trong ô (nếu có) tự trở về kho
    }
    selected = null;
    changed();
    renderOrderRight(i);
  }

  function unplace(i, slot) {
    state.answers[i][slot] = "";
    selected = null;
    changed();
    renderOrderRight(i);
  }

  function bindOrder(i) {
    const el = document.querySelector(`.part[data-part="${i}"] .col-right`);

    el.addEventListener("dragstart", (e) => {
      const c = e.target.closest(".card");
      if (!c || c.classList.contains("used")) return e.preventDefault();
      e.dataTransfer.setData("text/plain", JSON.stringify({ key: c.dataset.key, from: c.dataset.from }));
      e.dataTransfer.effectAllowed = "move";
      c.classList.add("dragging");
    });
    el.addEventListener("dragend", () => {
      el.querySelectorAll(".dragging, .over").forEach((x) => x.classList.remove("dragging", "over"));
    });
    el.addEventListener("dragover", (e) => {
      const t = e.target.closest(".slot, .pool");
      if (!t) return;
      e.preventDefault();
      el.querySelectorAll(".over").forEach((x) => x !== t && x.classList.remove("over"));
      t.classList.add("over");
    });
    el.addEventListener("dragleave", (e) => {
      const t = e.target.closest(".slot, .pool");
      if (t && !t.contains(e.relatedTarget)) t.classList.remove("over");
    });
    el.addEventListener("drop", (e) => {
      const t = e.target.closest(".slot, .pool");
      if (!t) return;
      e.preventDefault();
      let d;
      try { d = JSON.parse(e.dataTransfer.getData("text/plain")); } catch (err) { return; }
      if (t.classList.contains("slot")) place(i, d.key, d.from, Number(t.dataset.slot));
      else if (d.from !== "pool") unplace(i, Number(d.from));
    });

    // Cách chọn bằng click/chạm (dự phòng cho điện thoại)
    el.addEventListener("click", (e) => {
      const rm = e.target.closest("[data-remove]");
      if (rm) return unplace(i, Number(rm.dataset.remove));

      const card = e.target.closest(".card");
      const slot = e.target.closest(".slot");

      if (slot) {
        if (selected && selected.part === i) return place(i, selected.key, selected.from, Number(slot.dataset.slot));
        if (card) {
          selected = { part: i, key: card.dataset.key, from: card.dataset.from };
          renderOrderRight(i);
        }
        return;
      }
      if (card && !card.classList.contains("used")) {
        selected = isSel(i, card.dataset.key, "pool") ? null : { part: i, key: card.dataset.key, from: "pool" };
        return renderOrderRight(i);
      }
      if (e.target.closest(".pool") && selected && selected.part === i && selected.from !== "pool") {
        unplace(i, Number(selected.from));
      }
    });
  }

  /* ---- Bài dạng chọn người (sổ xuống) ---- */
  function renderMatch(p, i) {
    const a = state.answers[i];
    return `
      <div class="col-left reading">
        ${leftHead(p)}
        <h3 class="topic center">Topic: ${esc(p.topic)}</h3>
        ${p.people.map((pp) => `<h4>Person ${pp.key}</h4><p class="passage">${esc(pp.text)}</p>`).join("")}
      </div>
      <div class="col-right">
        <p class="instruction">${esc(p.instruction)}</p>
        ${p.questions
          .map(
            (q, j) => `
          <div class="q-line">
            <span>${j + 1}. ${esc(q.text)}</span>
            <select data-q="${j}">
              <option value="">Chọn đáp án</option>
              ${p.people.map((pp) => `<option value="${pp.key}" ${a[j] === pp.key ? "selected" : ""}>Person ${pp.key}</option>`).join("")}
            </select>
          </div>`
          )
          .join("")}
      </div>`;
  }

  /* ---- Bài dạng nối tiêu đề (sổ xuống) ---- */
  function renderHeading(p, i) {
    const a = state.answers[i];
    return `
      <div class="col-left">
        ${leftHead(p)}
        <p class="instruction">${esc(p.instruction)}</p>
        <p class="instruction-vi">${esc(p.instructionVi || "")}</p>
        <p class="topic">Topic: ${esc(p.topic)}</p>
        <ol class="heading-list">${p.headings.map((h) => `<li>${esc(h)}</li>`).join("")}</ol>
      </div>
      <div class="col-right">
        ${p.paragraphs
          .map(
            (pg, j) => `
          <div class="para">
            <div class="para-head">
              <b>Đoạn ${pg.key}</b>
              <select data-q="${j}">
                <option value="">Chọn tiêu đề</option>
                ${p.headings.map((h, k) => `<option value="${k + 1}" ${String(a[j]) === String(k + 1) ? "selected" : ""}>${k + 1}. ${esc(h)}</option>`).join("")}
              </select>
            </div>
            <p class="passage">${esc(pg.text)}</p>
          </div>`
          )
          .join("")}
      </div>`;
  }

  /* ================= SỰ KIỆN CHUNG ================= */
  function bindGlobal() {
    const parts = $("#parts");
    const partIndex = (el) => Number(el.closest(".part").dataset.part);

    parts.addEventListener("input", (e) => {
      if (!e.target.matches("input.blank")) return;
      state.answers[partIndex(e.target)][Number(e.target.dataset.q)] = e.target.value;
      changed();
    });
    parts.addEventListener("change", (e) => {
      if (!e.target.matches("select[data-q]")) return;
      state.answers[partIndex(e.target)][Number(e.target.dataset.q)] = e.target.value;
      e.target.classList.toggle("chosen", e.target.value !== "");
      changed();
    });
    parts.querySelectorAll("select[data-q]").forEach((s) => s.classList.toggle("chosen", s.value !== ""));

    $("#partTabs").addEventListener("click", (e) => {
      const t = e.target.closest("[data-tab]");
      if (t) showPart(Number(t.dataset.tab));
    });
    $("#prevBtn").onclick = () => showPart(current - 1);
    $("#nextBtn").onclick = () => showPart(current + 1);

    $("#homeLink").onclick = (e) => {
      if (!confirm("Thoát về trang chủ? Bài làm vẫn được lưu nhưng đồng hồ vẫn tiếp tục chạy.")) e.preventDefault();
    };

    $("#submitBtn").onclick = () => {
      const missing = totalQuestions(exam) - exam.parts.reduce((s, _, i) => s + answeredCount(i), 0);
      $("#modalMsg").innerHTML = missing > 0
        ? `Bạn còn <b>${missing}</b> câu chưa trả lời. Bạn có chắc chắn muốn nộp bài?`
        : `Bạn đã trả lời tất cả các câu. Nộp bài ngay?`;
      $("#modal").hidden = false;
    };
    $("#modalCancel").onclick = () => ($("#modal").hidden = true);
    $("#modalOk").onclick = () => submit(false);
  }

  /* ================= NỘP BÀI ================= */
  function submit(auto) {
    if (submitted) return;
    submitted = true;
    clearInterval(timerId);
    const used = Math.min(exam.duration * 60, (Date.now() - state.startTime) / 1000);
    sessionStorage.setItem(
      RESULT_KEY,
      JSON.stringify({ id, answers: state.answers, usedSeconds: used, auto, exam: isFinal ? exam : undefined })
    );
    clearState(id);
    location.replace("result.html");
  }
})();
