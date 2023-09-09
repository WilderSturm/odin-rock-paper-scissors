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
            return "You lose! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            return "It's a draw!";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper.";
        } else {
            return "You win! Paper beats Rock.";
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Scissors") {
            return "It's a draw!";
        } else if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors.";
        } else {
            return "You win! Scissors beats Paper.";
        }
    } else {
        return "Type 'Rock' or 'Scissors' or 'Paper'!";
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log (computerSelection);
console.log(playRound(playerSelection, computerSelection));