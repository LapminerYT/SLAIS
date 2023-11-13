const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
 {
    question: "Giá trị của biểu thức P=−2x²y(xy+y²) tại x=−1;y=2 là",
    choice1: "8",
    choice2: "-8",
    choice3: "1",
    choice4: "2",
    answer: 2
  },
  {
    question: "Cho các số x, y, z tỉ lệ với các số a, b, c. Khi đó (x²+2y²+3z²)(a2+2b²+3c²) bằng",
    choice1: "ax+2by+3cz",
    choice2: "(2ax+by+3cz)²",
    choice3: "(2ax+by+3cz)³",
    choice4: "(ax+2by+3cz)²",
    answer: 4
  },
  {
    question: "Tích của đa thức (a + b)(c + d) là:",
    choice1: "ac + ad + bc + bd",
    choice2: "ac - ad + bc - bd",
    choice3: "ac - ad - bc + bd",
    choice4: "ac + ad - bc - bd",
    answer: 1
  },
  {
    question: "Rút gọn biểu thức  A=(x−2)²−(x−3)²+(x+4)² thu được kết quả là",
    choice1: "9x² - 1 ",
    choice2: "3x² - 9",
    choice3: "x² - 9",
    choice4: "x² + 10x + 11",
    answer: 4
  },
  {
    question: "Giá trị của biểu thức  x(x−y)+y(x−y) tại x=1,5 và y=10 là: ",
    choice1: "102,25",
    choice2: "97,75",
    choice3: "-97,75",
    choice4: "-102,25",
    answer: 3
  },
  {
    question: "Tìm x biết (x−2)(x−1)=x(2x+1)+2",
    choice1: "x=0",
    choice2: "x=-4",
    choice3: "x=0 hoặc x=-4",
    choice4: "Đáp án khác",
    answer: 3
  },
  {
    question: "Tích của đa thức 6xy và đa thức 2x² - 3y là đa thức",
    choice1: "12x²y + 18xy²",
    choice2: "12x³y - 18xy²",
    choice3: "12x³y + 18xy²",
    choice4: "12x²y - 18xy²",
    answer: 2
  },
  {
    question: "Đa thức 7x³y²z - 2x⁴y³ chia hết cho đơn thức nào dưới đây?",
    choice1: "3x⁴",
    choice2: "-3x⁴",
    choice3: "-2x³y",
    choice4: "2x³y",
    answer: 3
  },
  {
    question: "Kết quả rút gọn biểu thức 3x(x - 5y) + (y - 5x)(-y) - 3(x² - y²) - 1 là",
    choice1: "3",
    choice2: "0",
    choice3: "-1",
    choice4: "1",
    answer: 3
  },
  {
    question: "Giá trị x thỏa mãn 2x(x - 1) + x(5 - 2x) - 15 = 0",
    choice1: "5",
    choice2: "-5",
    choice3: "-6",
    choice4: "6",
    answer: 2
  },
  
  {
    question: "Tìm đa thức M biết M + (5x² - 2xy) = 6x² + 10xy - y²",
    choice1: "M = x² + 12xy - y²",
    choice2: "M = x² - 12xy - y²",
    choice3: "M = x² + 12xy + y²",
    choice4: "M = -x² - 12xy - y²",
    answer: 1
  },
  {
    question: "Tìm đơn thức B biết: (B + 2x²y³).(-3xy) = -3x²y² - 6x³y⁴",
    choice1: "B = x2y",
    choice2: "B = – xy",
    choice3: "B = x + 1",
    choice4: "B = xy",
    answer: 4
  },
  {
    question: "Giá trị x thỏa mãn 2x(x - 1) + x(5 - 2x) - 15 = 0",
    choice1: "5",
    choice2: "-5",
    choice3: "-6",
    choice4: "6",
    answer: 2
  },
  {
    question: "Từ như thế nào thì có thể coi là từ ngữ chủ đề của đoạn văn?",
    choice1: "Thường được dùng để làm đề mục hoặc được lặp đi lặp lại nhiều lần",
    choice2: "Được đặt ở đầu hoặc cuối đoạn văn.",
    choice3: "Cả A và B đúng",
    choice4: "Cả A và B sai",
    answer: 3
  },
  {
    question: "Đoạn văn có câu chủ đề ở cả đầu và cuối đoạn văn là kiểu đoạn văn nào?",
    choice1: "Đoạn văn diễn dịch.",
    choice2: "Đoạn văn song song.",
    choice3: "Đoạn văn quy nạp",
    choice4: "Đoạn văn phối hợp.",
    answer: 4
  },
  {
    question: "Câu chủ đề của đoạn văn diễn dịch nằm ở đâu?",
    choice1: "Nằm ở cuối đoạn văn.",
    choice2: "Nằm ở giữa đoạn văn.",
    choice3: "Nằm ở đầu đoạn văn.",
    choice4: "Tất cả các phương án trên đều đúng.",
    answer: 3
  },
  {
    question: "Đoạn văn song song có đặc điểm gì?",
    choice1: "Mỗi câu trong đoạn nêu một khía cạnh của chủ đề đoạn văn, làm rõ cho nội dung đoạn văn.",
    choice2: "Các câu trong đoạn trình bày từ ý nhỏ đến ý lớn, từ cụ thể đến khái quát.",
    choice3: "Các câu trong đoạn văn không theo một trình tự nhất định nào.",
    choice4: "A, B, C đều sai.",
    answer: 1
  },
  {
    question: "Nêu hình thức của một đoạn văn?",
    choice1: "Bắt đầu từ chữ viết hoa lùi đầu dòng, kết thúc bằng dấu chấm xuống dòng",
    choice2: "Do nhiều câu văn tạo thành",
    choice3: "Có từ ngữ và có câu thể hiện chủ đề",
    choice4: "Cả A, B, C đều đúng",
    answer: 4
  },


  {
    question: "Từ tượng hình là gì?",
    choice1: "Là những từ mô tả âm thanh của con người, sự vật",
    choice2: "Là những từ gợi hình ảnh, dáng vẻ, trạng thái của sự vật.",
    choice3: "Là những từ miêu tả tính cách của con người.",
    choice4: "Là những từ gợi tả bản chất của sự vật, hiện tượng.",
    answer: 2
  },
  {
    question: "Ý nào dưới đây nêu chính xác nhất khái niệm từ tượng thanh?",
    choice1: "Là những từ gợi hình ảnh, dáng vẻ, trạng thái của sự vật.",
    choice2: "Là những từ mô tả âm thanh của con người, sự vật.",
    choice3: "Là những từ miêu tả tính cách của con người.",
    choice4: "Là những từ gợi tả bản chất của sự vật, hiện tượng.",
    answer: 2
  },
  {
    question: "__________ traditional costume is the most colorful among all people of Vietnam?",
    choice1: "What",
    choice2: "When",
    choice3: "Whose",
    choice4: "Why",
    answer: 3
  },
  {
    question: "Ao dai is the __________ dress of Vietnamese people",
    choice1: "major",
    choice2: "special",
    choice3: "traditional",
    choice4: "ethnic",
    answer: 3
  },
  {
    question: "The __________ minority peoples have their own customs and traditions.",
    choice1: "ethnic",
    choice2: "cultural",
    choice3: "basic",
    choice4: "diverse",
    answer: 1
  },

  {
    question: "I often help my parents dry the ___________ in the yard in front of my house.",
    choice1: "cattle",
    choice2: "cart",
    choice3: "herd",
    choice4: "cow",
    answer: 3
  },
  {
    question: "In __________ time, farmers use buffalo-drawn cart to take food home.",
    choice1: "harvest",
    choice2: "collect",
    choice3: "cattle",
    choice4: "local",
    answer: 1
  },
  {
    question: "Farmers work in __________ fields.",
    choice1: "paddy",
    choice2: "candy",
    choice3: "foody",
    choice4: "funny",
    answer: 1
  },
  {
    question:
      "If you ask __________ people, they will tell you the way to Gobi Highlands.",
    choice1: "national",
    choice2: "clothing",
    choice3: "local",
    choice4: "generous",
    answer: 3
  },
  {
    question: " There are some little boys __________ cattle in the paddy fields.",
    choice1: "herd;",
    choice2: "herding;",
    choice3: "to herd;",
    choice4: "herds;",
    answer: 2
  }
];

//CONSTANTS
const INCORRECT_TAX = 10;
const MAX_QUESTIONS = 15;

// Start Game & Timer
startGame = () => {
  questionCounter = 0;
  score = 100;
  availableQuesions = [...questions];
  getNewQuestion();

  // Timer
  setInterval(function () {
    score--;
    scoreText.innerText = score;

    if (score === 0) {
      localStorage.setItem("mostRecentScore", score);

      //go to the end page
      return window.location.assign("end.html");
    }
  }, 1000);
};

// Display Next Random Question and Answers
getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  // Get Answers
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

//Get User's Choice
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "incorrect") {
      decrementScore(INCORRECT_TAX);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

//Penalty for wrong choice
decrementScore = num => {
  score -= num;
  scoreText.innerText = score;
};


startGame();
