/* ĐỀ 0 – MOUNTAIN SUMMITS
 * Cấu trúc dữ liệu (dùng làm mẫu cho các đề khác):
 *  - fill    : điền từ. items[].before / after / options / answer (intro/outro: lời chào, lời kết – không bắt buộc)
 *  - order   : sắp xếp. first = câu cho sẵn ("" nếu không có), sentences = {A..E}, answer = thứ tự đúng
 *  - match   : chọn người. people[] (A..D), questions[].answer = "A".."D"
 *  - heading : nối tiêu đề. headings[] (đánh số từ 1), paragraphs[].answer = số thứ tự tiêu đề
 */
window.EXAMS = window.EXAMS || {};
window.EXAMS[0] = {
  id: 0,
  title: `TEST 0 - MOUNTAIN SUMMITS`,
  duration: 35,
  parts: [
    {
      type: "fill",
      title: `Part 1: Fill in the blanks`,
      instruction: `Chọn các đáp án phù hợp từ bảng đáp án và ghi đáp án phù hợp vào khoảng trống`,
      items: [
        { before: `Take the bus to the main`, after: `.`, options: ["station", "run", "walk"], answer: "station" },
        { before: `The bus`, after: `are near my house.`, options: ["color", "stops", "driver"], answer: "stops" },
        { before: `My house is`, after: `and you can easily recognize it by the color.`, options: ["tall", "fat", "green"], answer: "green" },
        { before: `I cook eggs for a quick`, after: `.`, options: ["dinner", "homework", "sore"], answer: "dinner" },
        { before: `After dinner, we watch`, after: `on TV.`, options: ["sing", "movies", "news"], answer: "movies" }
      ]
    },
    {
      type: "order",
      title: `Part 2: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `Films`,
      first: `The first film was shown in 1895 in a café in Paris, France.`,
      sentences: {
        A: `Now things have changed, actors and filmmakers can earn millions of dollars from film production.`,
        B: `Not only did these technological limitations exist, the movies were also low budget.`,
        C: `That's because the movies were only in black and white, and sometimes without sound.`,
        D: `Due to the lack of money, actors also had few opportunities to earn money through acting.`,
        E: `Old movies were very different from today's movies.`
      },
      answer: ["E", "C", "B", "D", "A"]
    },
    {
      type: "order",
      title: `Part 3: Arrange the sentences`,
      instruction: `Arrange the sentences into complete paragraphs. The first sentence is an example.`,
      topic: `Weekend activities`,
      first: `The weather was great last week, there was family sports in town.`,
      sentences: {
        A: `There were 60 participants, in which Ms. Kamur kept the fastest speed and won.`,
        B: `It was held on Saturday morning, there was a 10 mile race for adults.`,
        C: `After she received the prize, the following time was for children's activities.`,
        D: `After playing, the children were very hungry and ate with their parents.`,
        E: `Activities Included football, swimming, skipping rope, and the children played together very happily.`
      },
      answer: ["B", "A", "C", "E", "D"]
    },
    {
      type: "match",
      title: `Part 4: Opinion matching`,
      instruction: `Các bạn hãy đọc các phát biểu và cho biết các quan điểm sau thuộc về người nào.`,
      topic: `Childhood`,
      people: [
        { key: "A", text: `In the past, I really liked playing board games, now to limit the children from using computers, I often spend time playing with them, but I have struggled with them, the games nowadays have more characters and rules, making us think a lot every time we play, but my children and I still like it and have a good time and laugh together.` },
        { key: "B", text: `When I was a child, I often played soccer with other children of the same age, we often played football in the school yard and sometimes in the open spaces of the neighborhood. We divided into small teams and chased the ball until we were all tired.` },
        { key: "C", text: `When I was a child, I didn't like going out to play, so I chose reading books as a form of entertainment. The stories described in the pages of books helped me discover my own world. Later, when I grow up, I like playing modern games with eye-catching interfaces, which helps me relax and increase my creativity.` },
        { key: "D", text: `When I was a child, I really liked playing outdoor activities. I remember on bad weather days, I was always by the window, glued to the window to look outside, praying for the rain to stop. At those times, my mother often gave me paper and a box of crayons, I really liked that drawing activity and often drew at home when the weather was not good.` }
      ],
      questions: [
        { text: `Who likes to play with children?`, answer: "A" },
        { text: `Who likes to play with other children in the past?`, answer: "B" },
        { text: `Who looked forward to going out to play?`, answer: "D" },
        { text: `Who liked arts when he was a child?`, answer: "D" },
        { text: `Who likes modern games when growing up?`, answer: "C" },
        { text: `Who finds the games nowadays much more difficult?`, answer: "A" },
        { text: `Who liked reading books when he was a child?`, answer: "C" }
      ]
    },
    {
      type: "heading",
      title: `Part 5: Matching headings`,
      instruction: `Read the text and choose the most suitable heading for each paragraph.`,
      instructionVi: `Chọn tiêu đề phù hợp nhất cho mỗi đoạn văn (mỗi tiêu đề chỉ dùng một lần).`,
      topic: `Mountain Summits`,
      headings: [
        `Publicising one's achievements`,
        `A more intimate relationship`,
        `Our changing the perspective towards mountain`,
        `The wrong priority`,
        `A disturbing revelation`,
        `Unique sense of achievement`,
        `A focus on sustainability`
      ],
      paragraphs: [
        { key: "A", answer: 3, text: `The term "mountain" has evolved over time, reflecting not only physical characteristics but also cultural significance. Before the 19th century, people were quite shy when it came to conquering mountains. Today, with the development of technology, reaching the highest peaks has become easier. In contemporary discussions, mountains may symbolize challenges to overcome or destinations for adventure, transcending their geographical attributes.` },
        { key: "B", answer: 6, text: `Climbing a mountain often leads to a profound sense of accomplishment. It represents not just reaching a physical summit but also conquering personal fears and pushing one's limits, creating memories that last a lifetime. Besides, mountain climbing also creates Adrenaline - a hormone that creates a feeling of excitement like when playing other adventure sports.` },
        { key: "C", answer: 1, text: `In today's digital age, sharing achievements has become prevalent. Even before social media, documenting climbs seemed like a given. Climbing a mountain is frequently documented on social media, turning personal milestones into public spectacles that inspire others while also raising questions about authenticity.` },
        { key: "D", answer: 4, text: `In recent years, some climbers have become more focused on taking photos for social media than respecting the mountains they visit. Long lines form near popular summits as people wait for the perfect picture, often ignoring weather warnings or safety advice. In some cases, this obsession with online fame has led to serious accidents. It shows how personal image is sometimes valued more than safety or responsibility.` },
        { key: "E", answer: 5, text: `Mount Everest, once a symbol of human courage, has now become a worrying example of how adventure can harm nature. Every climbing season, long lines of climbers crowd the narrow paths to the summit, leaving behind waste and pollution on the fragile slopes. What used to be a personal challenge has turned into a commercial race, where success is measured by photos and fame rather than respect for the mountain. This situation is disturbing because it shows how our desire to conquer the world's highest peak has created serious environmental and moral concerns.` },
        { key: "F", answer: 7, text: `As the number of climbers on Mount Everest continues to rise, the need to focus on sustainability has become urgent. Local authorities and environmental groups are now introducing stricter waste management rules, encouraging climbers to bring back what they carry, and limiting the number of expeditions each season. Some teams have even started "clean-up climbs" to remove rubbish left behind on the slopes. These efforts remind us that protecting the mountain is just as important as reaching its peak. True success on Everest should mean leaving the mountain cleaner and safer for future generations.` },
        { key: "G", answer: 2, text: `Shared experiences in challenging environments, like mountains, can deepen intimacy in relationships. Couples or friends who navigate the challenges of climbing together often find their bonds strengthened through mutual support and understanding.` }
      ]
    }
  ]
};
