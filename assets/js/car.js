var car = document.querySelector('.car');
var questionText = document.getElementById('questionText');
var answerInput = document.getElementById('answerInput');
var resultText = document.getElementById('resultText');
var distance = 0;
var speed = 10;

function generateQuestion() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = Math.random() > 0.5 ? '+' : '-';
  var answer = operator === '+' ? num1 + num2 : num1 - num2;

  return {
    num1: num1,
    num2: num2,
    operator: operator,
    answer: answer
  };
}

function startGame() {
  distance = 0;
  car.style.left = distance + 'px';
  resultText.textContent = '';
  answerInput.value = '';
  answerInput.disabled = false;
  answerInput.focus();

  var question = generateQuestion();
  questionText.textContent = 'Tính ' + question.num1 + ' ' + question.operator + ' ' + question.num2;
}

function checkAnswer() {
  var answer = parseInt(answerInput.value);
  var question = generateQuestion();

  if (answer === question.answer) {
    distance += speed;
    car.style.left = distance + 'px';
    resultText.textContent = 'Chính xác! Bạn đã di chuyển ' + distance + 'px.';
  } else {
    resultText.textContent = 'Sai rồi! Bạn đã dừng lại.';
    answerInput.disabled = true;
  }

  questionText.textContent = 'Tính ' + question.num1 + ' ' + question.operator + ' ' + question.num2;
  answerInput.value = '';
  answerInput.focus();
}