let points = 0;
let currentQuestion = 0;

const questions = [
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  }
];

const surprises = [
  "",
  "",
  "",
  "",
  ""
];

function showQuestion() {
  document.querySelector("#question").innerHTML = questions[currentQuestion].question;
}

function checkAnswer() {
  const answer = document.querySelector("#answer").value;
  if (answer === questions[currentQuestion].answer) {
    points += 1;
    document.querySelector("#points").innerHTML = "Pontos: " + points;
    document.querySelector("#surprise").innerHTML = "Parabéns! Você ganhou " + surprises[currentQuestion];
  }
  currentQuestion += 1;
  if (currentQuestion === questions.length) {
    alert("Você completou todas as perguntas! Pontuação final: " + points);
    return;
  }
  document.querySelector("#answer").value = "";
  showQuestion();
}

showQuestion();
