function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    switch (randomizer) {
        case (0):
            return "rock";
            break;
        case (1):
            return "paper";
            break;
        case (2):
            return "scissors";
            break;
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors, Shoot!:");
}

// console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i ++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            console.log("Its a tie!");
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;       
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;          
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++; 
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } 
    }
}
playGame();
