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
    const gameResultText = document.createElement("div");
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Rock") {
            gameResultText.textContent = "Both chose rock. It's a tie!";
            ui.append(gameResultText);
        } else if (computerSelection === "Paper") {
            computerScore++;
            gameResultText.textContent = "The computer chose paper. You lost!";
            ui.append(gameResultText);
            computerScoreText.innerHTML = computerScore;
        } else {
            playerScore++;
            playerScoreText.innerHTML = playerScore;
            gameResultText.textContent = "The computer chose scissors. You won!";
            ui.append(gameResultText);
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            gameResultText.textContent = "Both chose paper. It's a tie!";
            ui.append(gameResultText);
        } else if (computerSelection === "Scissors") {
            computerScore++;
            gameResultText.textContent = "The computer chose scissors. You lost!";
            ui.append(gameResultText);
            computerScoreText.innerHTML = computerScore;
        } else {
            playerScore++;
            gameResultText.textContent = "The computer chose rock. You won!";
            ui.append(gameResultText);
            playerScoreText.innerHTML = playerScore;
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Scissors") {
            gameResultText.textContent = "Both chose scissors. It's a tie!";
            ui.append(gameResultText);
        } else if (computerSelection === "Rock") {
            computerScore++;
            gameResultText.textContent = "The computer chose rock. You lost!";
            ui.append(gameResultText);
            computerScoreText.innerHTML = computerScore;
        } else {
            playerScore++;
            gameResultText.textContent = "The computer chose paper. You won!";
            ui.append(gameResultText);
            playerScoreText.innerHTML = playerScore;
        }
    } 
}

function game(e) {
    let playerSelection = (e.target.id);
    console.log(playerSelection)
    if (playerSelection === "chooseRock") {
        playerSelection = "rock";
    } else if (playerSelection === "choosePaper") {
        playerSelection = "paper";
    } else {
        playerSelection = "scissors";
    }
    const computerSelection = getComputerChoice();
    const computerSelectionText = document.createElement("div");
    ui.innerHTML = "";
    playRound(playerSelection,computerSelection);
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