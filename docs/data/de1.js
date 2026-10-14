/* ĐỀ 1 – EARLY AUSTRALIA */
window.EXAMS = window.EXAMS || {};
window.EXAMS[1] = {
  id: 1,
  title: `TEST 1 - EARLY AUSTRALIA`,
  duration: 35,
  parts: [
    {
      type: "fill",
      title: `Part 1: Fill in the blanks`,
      instruction: `Chọn các đáp án phù hợp từ bảng đáp án và ghi đáp án phù hợp vào khoảng trống`,
      items: [
        { before: `I saw some shoes in the`, after: `of one store.`, options: ["market", "window", "shoe"], answer: "window" },
        { before: `I didn't`, after: `it.`, options: ["eat", "drink", "buy"], answer: "buy" },
        { before: `I buy some food at the`, after: `.`, options: ["classroom", "park", "market"], answer: "market" },
        { before: `I ate`, after: `.`, options: ["watch", "door", "cake"], answer: "cake" },
        { before: `I`, after: `a program on TV.`, options: ["ate", "saw", "watched"], answer: "watched" }
      ]
    },
    {
      type: "order",
      title: `Part 2: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `Homework next week`,
      first: `Our homework next week will be about places in town.`,
      sentences: {
        A: `This comparison will help you find common points between countries.`,
        B: `You may not find all the above information but you will find places with similarities.`,
        C: `Before writing, we need to find out some information about the place.`,
        D: `That information can revolve around the aspects: people, culture and history.`,
        E: `When collecting information about the above 3 aspects, you can compare with places in your country.`
      },
      answer: ["C", "D", "B", "E", "A"]
    },
    {
      type: "order",
      title: `Part 3: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `Travel`,
      first: `In the early 1800s, traveling was quite difficult.`,
      sentences: {
        A: `Thanks to the invention of cars and trains, it became easier for people to travel.`,
        B: `At that time, only the very wealthy could afford to travel.`,
        C: `Thanks to the great development of means of transport, today people can travel to other parts of the world.`,
        D: `Because flying is very fast, people can travel by this means to different locations for business or travel.`,
        E: `Not only the above 2 means of transport, people later had the opportunity to travel by aeroplanes.`
      },
      answer: ["B", "A", "E", "D", "C"]
    },
    {
      type: "match",
      title: `Part 4: Opinion matching`,
      instruction: `Các bạn hãy đọc các phát biểu và cho biết các quan điểm sau thuộc về người nào.`,
      topic: `Extreme sports`,
      people: [
        { key: "A", text: `Before trying any extreme sport, I believe it's absolutely essential to train properly. These kinds of activities are exciting, but they can also be dangerous if you don't know what you're doing. I've seen people get hurt because they didn't prepare well. That's why I always make sure to take a training course and understand the safety rules before I try anything new. With the right preparation, I think extreme sports can be a great experience.` },
        { key: "B", text: `I've always been more into traditional sports like swimming, running, or playing tennis. They're fun and easy to do regularly. But a few months ago, I went bungee jumping during a holiday, and it was an incredible experience. I didn't expect to enjoy it so much! I still prefer regular sports for everyday fitness, but now I'm definitely more open to trying extreme sports once in a while for the adventure.` },
        { key: "C", text: `What I love most about extreme sports is how they let me enjoy nature in a different way. Activities like rock climbing or mountain biking allow me to explore amazing places while challenging myself physically and mentally. It's a way to disconnect from daily life and feel completely alive. If I had more time and money, I'd love to do these kinds of sports more often, especially in wild, remote areas.` },
        { key: "D", text: `I know some people find extreme sports exciting, but for me, they've never been important. I actually avoid them as much as possible. I don't like the idea of putting myself in danger just for fun. There are plenty of safer ways to stay active and enjoy life. I'd rather go for a walk or do yoga than jump out of a plane or climb a mountain. It's just not my thing.` }
      ],
      questions: [
        { text: `Who still likes extreme sports after playing once?`, answer: "B" },
        { text: `Who enjoys nature?`, answer: "C" },
        { text: `Who finds extreme sports unimportant?`, answer: "D" },
        { text: `Who finds training before participating is important?`, answer: "A" },
        { text: `Who wants to play more extreme sports?`, answer: "C" },
        { text: `Who likes traditional sports like swimming?`, answer: "B" },
        { text: `Who always avoid playing extreme sports?`, answer: "D" }
      ]
    },
    {
      type: "heading",
      title: `Part 5: Matching headings`,
      instruction: `Read the text and choose the most suitable heading for each paragraph.`,
      instructionVi: `Chọn tiêu đề phù hợp nhất cho mỗi đoạn văn (mỗi tiêu đề chỉ dùng một lần).`,
      topic: `Early Australia`,
      headings: [
        `A journey made by stages`,
        `A new evidence that leads to speculation`,
        `An alternative history of settlement`,
        `Lack of knowledge and skills`,
        `Determination of the explorers through the ages`,
        `Natural barrier to resettlement`,
        `Technology helps uncover the ocean's secret`
      ],
      paragraphs: [
        { key: "A", answer: 3, text: `Scientists have found evidence that humans have lived in Australia for about 65,000 years. This is different from the previous thinking that the first people only arrived in Australia a few tens of thousands of years ago. The results from the analysis of archaeological relics have given rise to many different opinions about the origin of the first people in Australia. This discovery shows that the Australian aborigines have been present and lived here for a long time.` },
        { key: "B", answer: 6, text: `Humans coming to Australia did not happen only once. In addition to the first group of people, scientists have also discovered traces of two other groups that also came here. This shows that many groups of people came to Australia in the past. However, in ancient times, it was very difficult to get to Australia because they had to cross a large ocean without modern technology like today.` },
        { key: "C", answer: 7, text: `Thanks to modern machinery, scientists have discovered a chain of small islands that form a route to Australia. Technology such as remote sensing and electronic maps helps them identify the islands and the movements of ancient people. Thanks to that, they have a better understanding of the path that their ancestors may have taken to reach Australia.` },
        { key: "D", answer: 1, text: `Ancient people may have reached Australia by passing through many small islands. Each island was a place where they stopped to rest and find food, then continued their journey. This way of moving shows that they knew how to adapt to difficult conditions to be able to live in Australia.` },
        { key: "E", answer: 2, text: `Currently, researchers cannot know for sure how many people participated in the journey to Australia. It could have been only a few dozen people, or it could have been up to thousands. Due to the lack of clear evidence, it is difficult to determine the exact number. However, future research may help find the answer.` },
        { key: "F", answer: 4, text: `Some people think that ancient people were not smart enough or skilled enough to cross the sea to Australia. They think that without modern tools, ancient people could not navigate or cross the ocean. But history has proven that humans have always been smart and can overcome many difficulties.` },
        { key: "G", answer: 5, text: `From ancient times to the present, humans have always wanted to explore new places. Whether it was going to sea in ancient times or going to space today, we always find ways to overcome the limits. Ancient people may have crossed the sea because they wanted to find a better place to live. Thanks to their courage, we understand more about human history.` }
      ]
    }
  ]
};
