const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", function() {
    game("rock");
})
paperBtn.addEventListener("click", function() {
    game("paper");
})
scissorsBtn.addEventListener("click", function() {
    game("scissors")
})


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = (Math.floor(Math.random() * choices.length))
    if (randomChoice === 0){
        return "rock";
    }
    else if (randomChoice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }    
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection){
        return "It's a tie";
    }

    if  (playerSelection == "paper" && computerSelection == "rock") {
        return "You win";
    } else if (userSelection == "rock" && computerSelection == "paper"){
        return  "Computer wins";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return  "Computer wins";
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return  "You win"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer wins"
    }
}


function game(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log(playRound(userSelection, computerSelection))
}

game()










