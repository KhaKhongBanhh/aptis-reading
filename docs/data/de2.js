/* ĐỀ 2 – THE ARRIVAL OF THE FOUR-DAY WORK WEEK */
window.EXAMS = window.EXAMS || {};
window.EXAMS[2] = {
  id: 2,
  title: `TEST 2 - THE ARRIVAL OF THE FOUR-DAY WORK WEEK`,
  duration: 35,
  parts: [
    {
      type: "fill",
      title: `Part 1: Fill in the blanks`,
      instruction: `Chọn các đáp án phù hợp từ bảng đáp án và ghi đáp án phù hợp vào khoảng trống`,
      intro: [`Hi Kofi,`],
      outro: [`Love,`, `Albert.`],
      items: [
        { before: `I get up early in the`, after: `and I go running.`, options: ["morning", "sun", "market"], answer: "morning" },
        { before: `My`, after: `come and exercise with me.`, options: ["friends", "dogs", "schools"], answer: "friends" },
        { before: `I`, after: `my car at home and go for a walk.`, options: ["burn", "leave", "sell"], answer: "leave" },
        { before: `Exercise is`, after: `for my body.`, options: ["always", "dark", "good"], answer: "good" },
        { before: `I usually drink a lot of water and eat healthy`, after: `.`, options: ["food", "juice", "energy"], answer: "food" }
      ]
    },
    {
      type: "order",
      title: `Part 2: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `Music festivals`,
      first: `Last Saturday, a live music show was held in town park.`,
      sentences: {
        A: `Because it was free, more than 5,000 people attended.`,
        B: `The staff were very busy but still closed the shop early to watch the singer.`,
        C: `The local government planned, funded and paid for everything.`,
        D: `The singer performed for 2 hours, everyone had great fun.`,
        E: `People came early and sat in nearby shops waiting for the start time.`
      },
      answer: ["C", "A", "E", "B", "D"]
    },
    {
      type: "order",
      title: `Part 3: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `End of term project`,
      first: `This semester we have studied several chapters about local history in the class.`,
      sentences: {
        A: `After this time, other students will have questions for you and you have to answer them.`,
        B: `It will have relevant pictures, and your own writing on the topic.`,
        C: `This talk will point out the key points, and should last about 5 minutes in total.`,
        D: `The end of term project will focus on at least two of these.`,
        E: `You will then need to use these pictures and written work to create a presentation for the class.`
      },
      answer: ["D", "B", "E", "C", "A"]
    },
    {
      type: "match",
      title: `Part 4: Opinion matching`,
      instruction: `Các bạn hãy đọc các phát biểu và cho biết các quan điểm sau thuộc về người nào.`,
      topic: `Careers`,
      people: [
        { key: "A", text: `When I was a student, I decided to do an unpaid internship at organizations and companies. At first, my friends said it was a waste of time because I didn't earn any money. However, I learned a lot of practical skills and gained real working experience. I also built good relationships with my colleagues, which later helped me find a full-time job more easily.` },
        { key: "B", text: `My dream job is becoming a teacher, and I have never thought about changing to another career. Teaching has always been my goal because I enjoy working with students and helping them learn new things. At the moment, I am studying hard to become a good teacher in the future. While I am still in training, I also work part-time at a school so that I can gain real teaching experience. I really enjoy working while studying because it helps me improve my skills and become more confident in the classroom. Even though it can be challenging sometimes, I believe this experience is very valuable, and I am happy to continue on this career path without changing my job plans.` },
        { key: "C", text: `When I was a child I worked with a plumber and helped her with fixing things. I love a career in mechanical engineering because I enjoy making and repairing things by hand. However, the training period was much longer than I expected, about 2 years. Sometimes I felt tired of studying theory for so many years before actually starting work. Still, I believe the skills I learned will be useful in the long run.` },
        { key: "D", text: `After graduating, it took me a long time to find my first job. Many companies required experience, which made the process quite stressful. Luckily, I finally found a position that suits me well in a gaming company. I now work in a flexible working environment where I can manage my own time and work from home, and this helps me balance my work and personal life better.` }
      ],
      questions: [
        { text: `Who does not want to change to another job?`, answer: "B" },
        { text: `Who thinks their training is too long?`, answer: "C" },
        { text: `Who enjoys working while training?`, answer: "B" },
        { text: `Who enjoys working in a flexible working environment?`, answer: "D" },
        { text: `Who thinks it was difficult to get the first job?`, answer: "D" },
        { text: `Who thinks they got benefits from working for free?`, answer: "A" },
        { text: `Who likes doing things with their hands?`, answer: "C" }
      ]
    },
    {
      type: "heading",
      title: `Part 5: Matching headings`,
      instruction: `Read the text and choose the most suitable heading for each paragraph.`,
      instructionVi: `Chọn tiêu đề phù hợp nhất cho mỗi đoạn văn (mỗi tiêu đề chỉ dùng một lần).`,
      topic: `The Arrival of the Four-Day Work Week`,
      headings: [
        `A way of life now out of date`,
        `Alternative solutions worth considering`,
        `Undesirable financial consequences`,
        `Benefits for employees`,
        `Unforeseen challenges for employees`,
        `Difficult to change old habits`,
        `Unfair for employees`
      ],
      paragraphs: [
        { key: "A", answer: 1, text: `For many decades, working five or even six days a week was seen as the norm. About 100 years ago, Henry Ford (founder of Ford Motor Company) proposed giving workers Saturday and Sunday off with full pay. However, with modern technology, changing values, and a greater focus on work-life balance, that lifestyle is becoming less relevant. Employees and companies alike are beginning to question whether spending most of one's week at work is still necessary or productive.` },
        { key: "B", answer: 4, text: `Supporters of the four-day workweek argue that this model brings many obvious benefits to employees. They feel more satisfied with their jobs, more relaxed and more motivated to contribute. Having an extra day off helps them balance work and personal life, giving them the opportunity to care for their family, relax or pursue personal interests. This not only improves mental health but also contributes to increased productivity when they return to work.` },
        { key: "C", answer: 3, text: `Despite its positive potential, the adoption of a four-day workweek also comes with its fair share of concerns, particularly financial ones. In Japan in 1988, when several technology firms experimented with shorter work schedules, they reported a slight drop in productivity during the initial months and a noticeable rise in operational expenses. Businesses in the service or retail sectors may struggle to maintain continuous operations with reduced staffing. To compensate, they may have to hire more people, leading to increased costs in salaries, training and management. For smaller companies, this can easily become a major challenge in terms of budgets and ability to maintain operations.` },
        { key: "D", answer: 5, text: `A shortened workweek does not always bring a sense of relief. In fact, many employees worry that the workload will be compressed, making the four-day workday more stressful than usual. The compressed schedule can increase psychological and physical pressure, causing work efficiency to decline rather than improve. Concerns that "compressing work into shorter hours" may be counterproductive to the original goal.` },
        { key: "E", answer: 6, text: `One of the biggest barriers to changing working patterns is the stability of long-standing habits. The five-day workday structure affects not only the office workers but is also closely linked to the education system, public services and many other social activities. From schools, government agencies to shopping or entertainment centers – all are operating on this time frame. Adjusting the entire system like this will not be easy and is likely to face opposition from many sides. In France in 2000, when the government introduced a nationwide reduction of working hours, numerous companies discovered that employees continued to follow their old patterns, such as staying late or taking work home.` },
        { key: "F", answer: 7, text: `Another issue raised is fairness between labor groups. While office workers may benefit from the new work schedule, professions that require physical presence such as police, fire or emergency services have few options. They cannot simply reduce the working day without ensuring continuity in work. This is also true for teachers, as the number of students and teaching hours does not decrease. This could widen the gap between occupational classes and create divisions in society.` },
        { key: "G", answer: 2, text: `Given the potential difficulties, some experts suggest more flexible approaches instead of shortening the work week. Models such as remote working, job sharing or flexible working hours are considered more suitable in some cases. These solutions give employees more control over their time without putting pressure on businesses to change the entire operating structure. Thereby, the goal of work-life balance can still be achieved without creating many barriers.` }
      ]
    }
  ]
};
