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
    question: "Rút gọn biểu thức  A=(x−2)²−(x−3)²+(x+4)² thu được kết quả là",
    choice1: "x²+10x+11",
    choice2: "9x² - 1",
    choice3: "3x² - 0",
    choice4: "x²-2",
    answer: 1
  },
  {
    question: "Trong các biểu thức đại số sau, biểu thức nào không phải đơn thức?",
    choice1: "2",
    choice2: "x³y²",
    choice3: "5x+9",
    choice4: "x",
    answer: 1
  },
  {
    question: "Thương của phép chia (9x⁴y³–18x⁵y⁴–81x⁶y⁵):(−9x³y³) là đa thức có bậc là:",
    choice1: "5",
    choice2: "9",
    choice3: "3",
    choice4: "1",
    answer: 1
  },
  {
    question: "Kết quả của phép chia (2x³–x²+10x):x là",
    choice1: "x²-x+10",
    choice2: "2x² - x +10",
    choice3: "2x² - x - 10",
    choice4: "x²+x+10",
    answer: 2
  },
  {
    question: "Biểu thức D=(9x²y²–6x²y³):(−3xy)²+(6x²y+2x⁴):(2x²) sau khi rút gọn là đa thức có bậc là",
    choice1: "1",
    choice2: "3",
    choice3: "4",
    choice4: "2",
    answer: 4
  },
  {
    question: "Sau khi thu gọn đơn thức (3x²y).(xy²)ta được đơn thức.",
    choice1: "-3x³y³",
    choice2: "3x³y³",
    choice3: "3x³y²",
    choice4: "-3x³y³",
    answer: 2
  },
  {
    question: "Tìm phần biến trong đơn thức 100ab²x²yz với a, b là hằng số.",
    choice1: "100ab",
    choice2: "x²yz",
    choice3: "x2y",
    choice4: "ab²x²yz",
    answer: 2
  },
  {
    question: "Tính giá trị của đơn thức 5x⁴y²z³ tại x = -1; y = -1; z = -2",
    choice1: "20",
    choice2: "30",
    choice3: "-30",
    choice4: "-40",
    answer: 4
  },
  {
    question: "Sắp xếp các hạng tử của P(x) = 2x³ - 5x² + x⁴ - 7 theo lũy thừa giảm dần của biến.",
    choice1: "P(x) = x⁴+ 2x³- 5x²- 7",
    choice2: "P(x) = 5x²+ 2x³+ x⁴- 7",
    choice3: "P(x) = -7 - 5x²+ 2x³+ x⁴",
    choice4: "Không đáp án nào đúng",
    answer: 1
  },
  {
    question: "Thu gọn đa thức M = -3x2y - 7xy2 + 3x2y + 5x2y được kết quả là:",
    choice1: "M = 6x²y - 12xy²",
    choice2: "M = 12xy²",
    choice3: "M = -2xy²",
    choice4: "M = -6x²y - 2xy²",
    answer: 3
  },
  {
    question: "Tìm x, biết: (12x–5)(4x–1)+(3x–7)(1–16x)=81",
    choice1: "-1",
    choice2: "1",
    choice3: "2",
    choice4: "-2",
    answer: 2
  },
  {
    question: "Tính tổng các hệ số của lũy thừa bậc ba, lũy thừa bậc hai và lũy thừa bậc nhất trong kết quả của phép nhân (x²+x+1)(x³–2x+1)",
    choice1: "1",
    choice2: "-2",
    choice3: "-3",
    choice4: "3",
    answer: 3
  },
  {
    question: "Cho biểu thức C=x(y+z)–y(z+x)–z(x–y). Chọn khẳng định đúng.",
    choice1: "Biểu thức C không phụ thuộc vào x; y; z",
    choice2: "Biểu thức C phụ thuộc vào cả x; y; z",
    choice3: "Biểu thức C chỉ phụ thuộc vào y",
    choice4: "Biểu thức C chỉ phụ thuộc vào z",
    answer: 1
  },
  {
    question: "Cho biểu thức D=x(x–y)+y(x+y)–(x+y)(x–y)–2y². Chọn khẳng định đúng.",
    choice1: "Biểu thức D có giá trị là một số dương",
    choice2: "Biểu thức D có giá trị là một số âm",
    choice3: "Biểu thức D có giá trị phụ thuộc vào y, x",
    choice4: "Biểu thức D có giá trị là 0",
    answer: 4
  },
  {
    question: "Cho biểu thức M=x²(3x–2)+x(−3x²+1). Hãy chọn câu đúng",
    choice1: "Giá trị của biểu thức M tại x = 0 là 1",
    choice2: "Giá trị của biểu thức M tại x = 1 là 1",
    choice3: "Giá trị của biểu thức M tại x = -2 là -6",
    choice4: "Giá trị của biểu thức M tại x = 3 là -15",
    answer: 4
  },
];

//CONSTANTS
const INCORRECT_TAX = 10;
const MAX_QUESTIONS = 10;

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
