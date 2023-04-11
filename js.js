

var button = document.getElementById("start");
button.addEventListener("click", function() {
var element = document.getElementById("players");
element.style.display = "block";

var element = document.getElementById("start");
element.style.display = "none";

var element = document.getElementById("botChoice");
element.style.display = "block";
});


const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a Draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You Win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'You Lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'You Win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You Lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You Win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'You Lose!'
  }
  resultDisplay.innerHTML = result
}