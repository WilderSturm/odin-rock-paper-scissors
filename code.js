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
            return "It's a draw!";
        } else if (computerSelection === "Paper") {
            computerScore++;
            return "You lose! Paper beats Rock.";
        } else {
            playerScore++;
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            return "It's a draw!";
        } else if (computerSelection === "Scissors") {
            computerScore++;
            return "You lose! Scissors beats Paper.";
        } else {
            playerScore++;
            return "You win! Paper beats Rock.";
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Scissors") {
            return "It's a draw!";
        } else if (computerSelection === "Rock") {
            computerScore++;
            return "You lose! Rock beats Scissors.";
        } else {
            playerScore++;
            return "You win! Scissors beats Paper.";
        }
    } else {
        return "Type 'Rock' or 'Scissors' or 'Paper'!";
    }
}
function game() {  
    const playerSelection = prompt("Rock or Paper or Scissors?");
    const computerSelection = getComputerChoice();
    console.log(`The Computer chooses ${computerSelection}!`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`YOU ${playerScore} : ${computerScore} COMPUTER`);
}
function gameEnd(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("VICTORY!");
    } else if (playerScore < computerScore) {
        console.log("DEFEAT!");
    } else {
        console.log("DRAW!");
    }
}
let playerScore = 0;
let computerScore = 0;
game();
game();
game();
game();
game();
gameEnd(playerScore, computerScore);
