/* ĐỀ 4 – WOMEN MATHEMATICIANS */
window.EXAMS = window.EXAMS || {};
window.EXAMS[4] = {
  id: 4,
  title: `TEST 4 - WOMEN MATHEMATICIANS`,
  duration: 35,
  parts: [
    {
      type: "fill",
      title: `Part 1: Fill in the blanks`,
      instruction: `Chọn các đáp án phù hợp từ bảng đáp án và ghi đáp án phù hợp vào khoảng trống`,
      items: [
        { before: `The water is`, after: `.`, options: ["sour", "clear", "see"], answer: "clear" },
        { before: `The`, after: `is out.`, options: ["wind", "dust", "sun"], answer: "sun" },
        { before: `I have an`, after: `holiday.`, options: ["tired", "enjoyable", "good"], answer: "enjoyable" },
        { before: `After`, after: `so hard.`, options: ["working", "sleeping", "eating"], answer: "working" },
        { before: `I hope to`, after: `your letter.`, options: ["tell", "read", "forward"], answer: "read" }
      ]
    },
    {
      type: "order",
      title: `Part 2: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `A new café`,
      first: `Yesterday I went to a new opening café named Corner Cafe on High Street.`,
      sentences: {
        A: `Although it was busy the staff still arranged a table for me.`,
        B: `I looked at all of those and chose the most expensive sandwich.`,
        C: `When I was there it was very crowded and the staff were very busy on the first day.`,
        D: `It tasted quite good with cheese toppings and I will definitely go back to this place.`,
        E: `They gave me the menu and when I looked at it I felt disappointed because I saw quite a few dishes.`
      },
      answer: ["C", "A", "E", "B", "D"]
    },
    {
      type: "order",
      title: `Part 3: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `Famous singer`,
      first: `Jaden Nobelton is only 18 years old and he is a famous singer.`,
      sentences: {
        A: `Many people follow him on social media and he becomes a famous singer.`,
        B: `Before becoming famous at his age, he studied art and music in high school.`,
        C: `During his studies, he studied creativity and singing on stage.`,
        D: `In these performances, he often wears bright clothes and paints his face.`,
        E: `The uniqueness in his way of dressing and his songs makes him attract attention.`
      },
      answer: ["B", "C", "D", "E", "A"]
    },
    {
      type: "match",
      title: `Part 4: Opinion matching`,
      instruction: `Các bạn hãy đọc các phát biểu và cho biết các quan điểm sau thuộc về người nào.`,
      topic: `Music Festival`,
      people: [
        { key: "A", text: `This was my first time attending the Music Festival, and to be honest, the weather really didn't cooperate. It rained heavily on the first two days, which made it difficult to enjoy the outdoor activities. I still got wet in the tent. But I didn't let that ruin the experience. On the final day, the skies cleared up and the performances were truly amazing — especially the final act in the evening. That last day made it all worthwhile, and I left with some great memories despite the poor weather.` },
        { key: "B", text: `I've been to this festival a couple of times in the past, the quality was good the last times I came, but this time is completely different. The sound quality wasn't great, and the whole event just felt disorganised. There weren't enough facilities, and the staff didn't seem prepared to handle the crowd. I couldn't even interact with the band. I don't think I'll be coming back next year. It's simply not worth the money or the time anymore.` },
        { key: "C", text: `I really enjoyed the music of this festival and I danced to the music, I felt every second of the festival was worth it. I absolutely loved the energy of the performances, and the music was spot on throughout the weekend. However, I have to say the ticket prices were far too high, especially for students. I paid almost double what I did two years ago, and although I enjoyed the music, I'm not sure it offered good value for money. If they don't lower the prices next year, a lot of people might skip it.` },
        { key: "D", text: `We were playing in a band and we finished our performance in the morning. However, I stayed at the festival to meet up with some old band mates. We talked a lot. However, I didn't like the venue. It was too crowded and not well organised. The road to the tent village was also congested. I think they should choose a better location next year.` }
      ],
      questions: [
        { text: `Who was disappointed with the festival?`, answer: "B" },
        { text: `Who didn't like the venue?`, answer: "D" },
        { text: `Who found the ticket prices expensive?`, answer: "C" },
        { text: `Who enjoyed the last day?`, answer: "A" },
        { text: `Who liked to meet old friends?`, answer: "D" },
        { text: `Who disliked the bad weather?`, answer: "A" },
        { text: `Who enjoyed the music at the event?`, answer: "C" }
      ]
    },
    {
      type: "heading",
      title: `Part 5: Matching headings`,
      instruction: `Read the text and choose the most suitable heading for each paragraph.`,
      instructionVi: `Chọn tiêu đề phù hợp nhất cho mỗi đoạn văn (mỗi tiêu đề chỉ dùng một lần).`,
      topic: `Women Mathematicians`,
      headings: [
        `Acknowledging achievement of a pioneer`,
        `Gender obscure achievements`,
        `Uniformity can be a disadvantage`,
        `A long career showing exceptional ability`,
        `Labels can change perspective on people`,
        `Man unfairly credited`,
        `Attempting to create a gender balance`
      ],
      paragraphs: [
        { key: "A", answer: 2, text: `In 2014, Iranian mathematician Maryam Mirzakhani received the prestigious Fields Prize, the highest honor in mathematics, and the first time in its 70 years that a woman has won it. However, many newspapers at the time emphasised that the prize winner was a woman. For centuries, the achievements of women in mathematics were either omitted from historical records or attributed to male colleagues. Many of their contributions were later credited to male scholars. Such erasure has been a recurring theme in the history of women in this field.` },
        { key: "B", answer: 1, text: `Maria Agnesi is widely recognised for her important contributions to mathematics. In 1748, she published a major mathematics textbook that was used throughout Europe, becoming the first woman to produce such a comprehensive work in this field. Her book helped explain complex mathematical ideas in a clear and systematic way. Later, in 1750, she was appointed professor of mathematics at a university, making her the first woman to hold this position. These achievements marked a significant moment in the history of mathematics and highlighted her lasting influence on future generations.` },
        { key: "C", answer: 6, text: `Sophie Germain made remarkable contributions to mathematics, particularly in number theory and elasticity. In 1816, she submitted work on number theory under a male pseudonym because women were not taken seriously in mathematics at that time. Later, in 1821, she won a prize from the Paris Academy of Sciences for her research on elasticity, but her achievements were often published or credited to male colleagues instead of her. Despite these challenges, her work was highly influential, and later generations recognised her contributions, proving that her talent had been overlooked for many years.` },
        { key: "D", answer: 4, text: `Millicent Fawcett demonstrated remarkable intellectual ability from a young age. At just 19, she delivered a public lecture on Sir Isaac Newton at a time when women rarely spoke in academic settings. Although she did not pursue a professional career in mathematics, her early accomplishments in the subject reflected a sharp analytical mind. Over the decades, Fawcett dedicated herself to advocating for women's education and suffrage, tirelessly working to open academic and political doors for future generations. Her lifelong commitment to intellectual and social progress stands as a testament to her exceptional capabilities and enduring influence.` },
        { key: "E", answer: 5, text: `When female mathematicians are described as "women geniuses" or "female prodigies," the gender label, while well-intended, often implies that excellence is rare among women. Such terms, though celebratory, can unintentionally reinforce the idea that women's success in mathematics is unusual, rather than simply the result of talent and hard work.` },
        { key: "F", answer: 7, text: `To address the gender imbalance in mathematics, many universities and organizations now run outreach programs, offer scholarships specifically for women, and encourage female mentorship in STEM fields. Some universities are required to arrange places where female mathematicians can work and research. These efforts aim not to give unfair advantage, but to create equal opportunities in a domain where women have historically been underrepresented.` },
        { key: "G", answer: 3, text: `In efforts to level the playing field, some institutions have implemented standardized criteria for admissions or research evaluation. However, such uniform methods can sometimes ignore the diverse paths and challenges faced by individuals, particularly women balancing academic and societal expectations. A one-size-fits-all approach may not always foster true equity.` }
      ]
    }
  ]
};
