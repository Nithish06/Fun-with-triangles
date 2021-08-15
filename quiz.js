var form = document.querySelector(".form");
var outputBtn = document.querySelector("#submit-answer-btn");
var showMsg = document.querySelector(".output");
var output = document.querySelector(".opt");
var questionContainer = document.querySelectorAll(".question-container");

const correctAnswer = [
  "Yes",
  "No",
  "Yes",
  "Yes",
  "Yes",
  "Isosceles",
  "30",
  "Both",
  "5cm",
  "Scalene",
];

function calScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(form);
  for (let value of formResult.values()) {
    if (value === correctAnswer[index]) {
      score++;
      questionContainer[index].style.backgroundColor = "lightgreen";
    } else {
      questionContainer[index].style.backgroundColor = "pink";
    }
    index++;
  }
  showMsg.innerHTML = "Your Score: " + score;
  output.style.display = "block";
}

outputBtn.addEventListener("click", calScore);
