const button = document.getElementById("start");
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function playerChoice() {
    rock.addEventListener("click", () => {
        userChoice = "rock";
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
        console.log();
    });

    paper.addEventListener("click", () => {
        userChoice = "paper";
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    });

    scissors.addEventListener("click", () => {
        userChoice = "scissors";
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    });
}

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

const blurOpacity = [{ opacity: 0 }];

const blurTiming = {
    duration: 500,
};

const blurOut = document.getElementById("blur");

button.addEventListener("click", () => {
    blurOut.animate(blurOpacity, blurTiming);
    button.animate(blurOpacity, blurTiming);

    setTimeout(function () {
        document.getElementById("blur").style.opacity = "0";
        document.getElementById("blur").style.zIndex = "-1";
    }, 400);

    setTimeout(function () {
        document.getElementById("start").style.opacity = "0";
        document.getElementById("start").style.zIndex = "-1";
    }, 400);
});

playerChoice();
