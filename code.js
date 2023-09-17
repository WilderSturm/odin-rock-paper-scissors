function getComputerChoice() {
    let chooseOption = Math.floor(Math.random()*3+1);
    if (chooseOption === 1) {
        return "Rock";
    } else if (chooseOption === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Rock") {
            return;
        } else if (computerSelection === "Paper") {
            computerScore++;
            console.log(computerScore);
            computerScoreText.innerHTML = computerScore;
        } else {
            playerScore++;
            playerScoreText.innerHTML = playerScore;
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            return;
        } else if (computerSelection === "Scissors") {
            computerScore++;
            computerScoreText.innerHTML = computerScore;
        } else {
            playerScore++;
            playerScoreText.innerHTML = playerScore;
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Scissors") {
            return;
        } else if (computerSelection === "Rock") {
            computerScore++;
            computerScoreText.innerHTML = computerScore;
        } else {
            playerScore++;
            playerScoreText.innerHTML = playerScore;
        }
    } 
}

function game(e) {
    let playerSelection = (e.target.id);
    if (playerSelection === "chooseRock") {
        playerSelection = "rock";
    } else if (playerSelection === "choosePaper") {
        playerSelection = "paper";
    } else {
        playerSelection = "scissors";
    }
    const computerSelection = getComputerChoice();
    const computerSelectionText = document.createElement("div");
    computerSelectionText.textContent = `The computer chooses ${computerSelection}!`;
    playRound(playerSelection,computerSelection);
    ui.innerHTML = "";
    ui.append(computerSelectionText);
    gameEnd(playerScore,computerScore);

}

function gameEnd(playerScore, computerScore) {
    if(computerScore === 5 || playerScore === 5) {
        if (playerScore > computerScore) {
            const winMessage = document.createElement("h1");
            winMessage.innerText = ("VICTORY!");
            restart.append(winMessage);
        } else if (playerScore < computerScore) {
            const defeatMessage = document.createElement("h1");
            defeatMessage.innerText = ("DEFEAT!");
            restart.append(defeatMessage);
        }
        restartGame();
        btn.forEach((button) => {
            button.disabled = true;
        });
    } else {
        return;
    }
}

function restartGame() {
    const restartButton = document.createElement("button");
    restartButton.innerText = "Retry";
    restart.append(restartButton);
    restartButton.addEventListener("click", function(e) {
        playerScore = 0;
        computerScore = 0;
        playerScoreText.innerHTML = (playerScore);
        computerScoreText.innerHTML = (computerScore);
        restart.innerText = ("");
        btn.forEach((button) => {
            button.disabled = false;
        ui.innerHTML = "";
        });
    });
}
let playerScore = 0;
console.log(playerScore);
let computerScore = 0;

const btn = document.querySelectorAll(".startButton");
    btn.forEach((button) => {
        button.addEventListener("click", game);
    });
const ui = document.querySelector(".interface");
const currentScoreText = document.querySelector("#currentScore");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const restart = document.querySelector("#restartPage");