/* ĐỀ 3 – FROZEN LAND */
window.EXAMS = window.EXAMS || {};
window.EXAMS[3] = {
  id: 3,
  title: `TEST 3 - FROZEN LAND`,
  duration: 35,
  parts: [
    {
      type: "fill",
      title: `Part 1: Fill in the blanks`,
      instruction: `Chọn các đáp án phù hợp từ bảng đáp án và ghi đáp án phù hợp vào khoảng trống`,
      intro: [`Hi Patty,`, `Just to let you know our family are having a vacation.`],
      outro: [`We want to discover their history.`, `Love,`, `Amina.`],
      items: [
        { before: `Yesterday we went to a`, after: `village.`, options: ["small", "smart", "harmful"], answer: "small" },
        { before: `We`, after: `in a small house in the village.`, options: ["fly", "stay", "swim"], answer: "stay" },
        { before: `There is a beautiful`, after: `in the house.`, options: ["mountain", "garden", "ocean"], answer: "garden" },
        { before: `There are a lot of green`, after: `in the garden.`, options: ["animals", "rivers", "trees"], answer: "trees" },
        { before: `Today, we plan to visit`, after: `buildings in the village.`, options: ["old", "tall", "furious"], answer: "old" }
      ]
    },
    {
      type: "order",
      title: `Part 2: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs.`,
      topic: `College Welcome Day`,
      first: ``, // không có câu cho sẵn -> xếp cả 5 câu
      sentences: {
        A: `At the end of the talk, you will meet the head of department and teachers.`,
        B: `It starts at 10am, there is a small presentation in the main hall.`,
        C: `This meal is on the 2nd floor of the building.`,
        D: `These staff members give you a guided tour of the building.`,
        E: `You have to stay with other students until lunch break.`
      },
      answer: ["B", "A", "D", "E", "C"]
    },
    {
      type: "order",
      title: `Part 3: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `African American woman in space`,
      first: `Mae Jemison's father is a skilled worker, her mother is a teacher.`,
      sentences: {
        A: `Some of those include growing plants and animals in a spaceship.`,
        B: `This was about science, she was later a member of the research team.`,
        C: `With the support of her parents, she went to university and studied science.`,
        D: `Being a part of this group, she traveled to space frequently, and conducted many experiments in space.`,
        E: `Her degree in the subject enabled her to take a training course in the USA.`
      },
      answer: ["C", "E", "B", "D", "A"]
    },
    {
      type: "match",
      title: `Part 4: Opinion matching`,
      instruction: `Các bạn hãy đọc các phát biểu và cho biết các quan điểm sau thuộc về người nào.`,
      topic: `Volunteering`,
      people: [
        { key: "A", text: `Some people enjoy volunteering abroad, but honestly, I feel most people are more interested in travelling. I believe we should use our time more meaningfully. Each town has many people in need. Their situations are difficult, and they don't have the means to improve their quality of life. They are individuals who have contributed a lot to the country. Sharing stories with them helps us understand the differences between generations. We can also broaden our knowledge about local history, traditions, and culture through their experiences.` },
        { key: "B", text: `My mother told me to do local volunteering because she is part of that organisation, but I'm not into it. I prefer volunteering abroad because I can develop soft skills – something that will benefit my future career. Also, meeting new people helps me expand my network and create valuable connections I can use later in my professional life.` },
        { key: "C", text: `I'm too busy and rarely have any free time to do anything, so spending even a few hours volunteering is difficult. I would have to take half a day off work. I see many people in need and they genuinely require some extra financial support. That's something I can help with because I earn a good salary. Making monthly donations is not a problem for me – it's how I show my support and contribution.` },
        { key: "D", text: `I believe there are many ways we can show kindness through volunteering. I'm retired now, and I currently help build houses for people in need. I work with a volunteering organisation that already has clear plans in place. Through this work, I've had the chance to experience different foreign cultures. We're often sent to various countries to carry out these projects, so it's also a great way to travel while doing something meaningful. The job involves manual labour, so we're able to improve our physical health – something that some people only begin to notice after a while.` }
      ],
      questions: [
        { text: `Who wants to enhance future career?`, answer: "B" },
        { text: `Who helps support charity work with money?`, answer: "C" },
        { text: `Who thinks it should help local community?`, answer: "A" },
        { text: `Who thinks volunteering helps improve physical health?`, answer: "D" },
        { text: `Who thinks it can improve knowledge about culture?`, answer: "A" },
        { text: `Who thinks it is a way to travel?`, answer: "D" },
        { text: `Who wants to make new friends?`, answer: "B" }
      ]
    },
    {
      type: "heading",
      title: `Part 5: Matching headings`,
      instruction: `Read the text and choose the most suitable heading for each paragraph.`,
      instructionVi: `Chọn tiêu đề phù hợp nhất cho mỗi đoạn văn (mỗi tiêu đề chỉ dùng một lần).`,
      topic: `Frozen land`,
      headings: [
        `First step on the ice`,
        `Less effort needed`,
        `Why is it so cold?`,
        `Where is the end of the Earth?`,
        `Who is in charge?`,
        `Race to the pole`,
        `Hidden geography`
      ],
      paragraphs: [
        { key: "A", answer: 5, text: `Although Antarctica is not claimed as a country, several nations have laid territorial claims over parts of the continent. However, under the Antarctic Treaty System signed in 1959, no single country has full ownership. Instead, the region is governed collectively by over 50 countries that have agreed to preserve it for peaceful and scientific purposes. No military activity is allowed, and scientific cooperation is encouraged. This unique model of international governance helps protect the fragile environment of the frozen land and ensures that its resources are not exploited for commercial gain.` },
        { key: "B", answer: 1, text: `The first known landing on Antarctica took place in the early 19th century when a group of seal hunters unintentionally arrived at the icy coastline. Later, exploratory missions were organized specifically to set foot on the continent. In 1895, a Norwegian expedition became the first officially recognized landing. These early steps were dangerous and uncertain, with little knowledge of the terrain or weather. Still, the achievement marked a turning point in human exploration, showing that even the most remote and inhospitable places on Earth could be reached with courage and persistence.` },
        { key: "C", answer: 4, text: `Antarctica has often been described as the end of the Earth. Located at the southernmost point of the planet, it remains one of the most mysterious and least accessible places for humans. It's surrounded by the Southern Ocean and sits opposite the Arctic in the global geography. For centuries, explorers speculated whether such a place existed at all. Today, while satellite images and scientific missions provide more data, the continent still retains an aura of the unknown, attracting adventurers and scientists who want to experience the planet's final frontier.` },
        { key: "D", answer: 7, text: `Despite being covered in thick sheets of ice, Antarctica has a surprisingly diverse and dramatic landscape hidden beneath its surface. Using ground-penetrating radar and satellite imaging, scientists have discovered vast mountain ranges, deep valleys, and even ancient lakes buried under kilometers of ice. These findings suggest that Antarctica was once a very different environment. Studying this hidden geography helps researchers understand the Earth's geological past, as well as how changes in climate may affect the region's ice coverage in the future.` },
        { key: "E", answer: 6, text: `The early 20th century saw a dramatic competition between nations to reach the South Pole. Most famously, British explorer Robert Falcon Scott and Norwegian Roald Amundsen led rival expeditions. Amundsen reached the Pole first in 1911, using dog sleds and careful planning. Scott arrived weeks later, only to perish on the return journey with his team. The race to the pole was one of the most extreme tests of human endurance and remains one of the most iconic chapters in the history of polar exploration.` },
        { key: "F", answer: 2, text: `Travel across Antarctica remains one of the most difficult journeys on Earth. However, modern technology has significantly reduced the physical effort required. In the past, explorers dragged heavy sleds by hand or used animals, often in dangerous and freezing conditions. Today, snowmobiles, tracked vehicles, and even aircraft allow researchers to move equipment and people more easily. While the environment is still harsh, advances in transportation and survival gear make scientific missions more efficient and less life-threatening than those of early explorers.` },
        { key: "G", answer: 3, text: `Antarctica is the coldest place on Earth, with temperatures regularly dropping below –60°C in winter. The continent's high altitude, its position near the South Pole, and the fact that sunlight is absent for months all contribute to its extreme chill. Its white ice surface also reflects most of the sun's heat back into the atmosphere. These unique features make it difficult for heat to accumulate, and as a result, the region remains frozen even in summer. Understanding these conditions helps scientists study global weather patterns and climate change.` }
      ]
    }
  ]
};
