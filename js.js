<<<<<<< Updated upstream
const startBtn = document.querySelector("#start") 
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

startBtn.onclick = startGame
rockBtn.onclick = rock
paperBtn.onclick = paper
scissorsBtn.onclick = scissors

function startGame() {
  console.log("Hello");
}
=======
var button = document.getElementById("start");
button.addEventListener("click", function () {
    var element = document.getElementById("players");
    element.style.display = "block";

    // var element = document.getElementById("start");
    // element.style.display = "none";

    var element = document.getElementById("botChoice");
    element.style.display = "block";
});

// var button = document.getElementById("start");
// button.addEventListener("click"),
//     function () {
//         var element = document.getElementById("blur");
//         element.style.display = "none";
//     };

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Its a Draw!";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You Win!";
        userScore++;
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You Lost!";
        computerScore++;
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You Win!";
        userScore++;
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You Lose!";
        computerScore++;
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You Win!";
        userScore++;
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You Lose!";
        computerScore++;
    }
    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function start() {
    document.getElementById("blur").style.animation = "animation 2s forwards";
}
>>>>>>> Stashed changes
