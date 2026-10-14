/* Trang kết quả: chấm điểm và hiển thị đáp án từng câu */
(function () {
  const root = document.getElementById("result");
  let res = null;
  try { res = JSON.parse(sessionStorage.getItem(RESULT_KEY)); } catch (e) {}

  if (!res) {
    root.innerHTML = `
      <div class="empty-page">
        <h2>Chưa có kết quả nào</h2>
        <a class="btn btn-primary" href="index.html">Về trang chủ</a>
      </div>`;
    return;
  }

  const isFinal = res.id === FINAL_ID;
  const src = (p) => (p.source != null ? ` (Đề ${p.source})` : "");

  // Đề tổng hợp được lưu kèm kết quả (vì mỗi lần sinh ngẫu nhiên)
  (res.exam ? Promise.resolve(res.exam) : loadExamData(res.id)).then((exam) => {
    const g = gradeExam(exam, res.answers);
    const pct = Math.round((g.score / g.max) * 100);
    const short = (s, n = 110) => (s.length > n ? s.slice(0, n).trim() + "…" : s);
    const userCell = (r) => (r.user ? esc(r.user) : `<i class="muted">Chưa trả lời</i>`);

    const actions = `
      <div class="result-actions">
        <a class="btn btn-outline" href="index.html">← Về trang chủ</a>
        <button class="btn btn-primary" data-retry>${isFinal ? "Làm đề tổng hợp mới" : "Làm lại đề này"}</button>
      </div>`;

    root.innerHTML = `
      <section class="summary">
        <div class="score-circle ${pct >= 50 ? "pass" : "fail"}">
          <b>${g.score}/${g.max}</b><span>${pct}%</span>
        </div>
        <div class="summary-info">
          <h1>${esc(exam.title)}</h1>
          ${res.auto ? `<p class="auto-note">⏰ Hết giờ – bài làm đã được nộp tự động.</p>` : ""}
          <p>Thời gian làm bài: <b>${fmtTime(res.usedSeconds)}</b> / ${exam.duration}:00</p>
          <div class="chips">
            ${g.parts.map((p, i) => `<a class="chip" href="#part-${i}">Bài ${i + 1}${src(p.part)}: <b>${p.score}/${p.max}</b></a>`).join("")}
          </div>
        </div>
      </section>
      ${actions}

      ${g.parts
        .map((p, i) => {
          const hasQ = p.part.type !== "order";
          return `
          <section class="result-part" id="part-${i}">
            <div class="result-part-head">
              <h2>Bài ${i + 1} – ${esc(p.part.title)}${p.part.source != null ? ` <small class="src">(Đề ${p.part.source})</small>` : ""}</h2>
              <span class="part-score">${p.score}/${p.max}</span>
            </div>
            ${p.part.topic ? `<p class="topic">Topic: ${esc(p.part.topic)}</p>` : ""}
            ${p.part.type === "order" && p.part.first ? `<p class="first"><b>Câu số 1 (cho sẵn):</b> ${esc(p.part.first)}</p>` : ""}
            <div class="table-wrap">
              <table class="result-table">
                <thead>
                  <tr><th>Câu</th>${hasQ ? "<th>Câu hỏi</th>" : ""}<th>Bạn trả lời</th><th>Đáp án đúng</th><th></th></tr>
                </thead>
                <tbody>
                  ${p.rows
                    .map(
                      (r) => `
                    <tr class="${r.ok ? "ok" : "wrong"}">
                      <td class="nowrap">${esc(r.label)}</td>
                      ${hasQ ? `<td>${esc(short(r.question))}</td>` : ""}
                      <td>${userCell(r)}</td>
                      <td class="correct">${esc(r.correct)}</td>
                      <td class="mark">${r.ok ? "✅" : "❌"}</td>
                    </tr>`
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </section>`;
        })
        .join("")}
      ${actions}`;

    root.addEventListener("click", (e) => {
      if (!e.target.closest("[data-retry]")) return;
      clearState(res.id);
      location.href = `exam.html?de=${res.id}`;
    });
  });
})();
