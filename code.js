function getComputerChoice() {
    let chooseOption = Math.floor(Math.random()*3+1);
    if (chooseOption === 1) {
        return "Rock";
    } else if (chooseOption === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
getComputerChoice();