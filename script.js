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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const btnRock = document.querySelector(".btnRock");
    const btnPaper = document.querySelector(".btnPaper");
    const btnScissors = document.querySelector(".btnScissors");
    const result = document.querySelector(".result");
    const score = document.querySelector(".score");

    btnRock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        score.textContent = `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
        if (humanScore === 5) {
            result.textContent = "You win!";
        } else if (computerScore === 5) {
            result.textContent = "You lose!";
        }
    });

    btnPaper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        score.textContent = `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
        if (humanScore === 5) {
            result.textContent = "You win!";
        } else if (computerScore === 5) {
            result.textContent = "You lose!";
        }
    });

    btnScissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        score.textContent = `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
        if (humanScore === 5) {
            result.textContent = "You win!";
        } else if (computerScore === 5) {
            result.textContent = "You lose!";
        }
    });


    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            result.textContent = "It's a tie!";
            console.log("Its a tie!");
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            result.textContent = "You win! Rock beats Scissors!";
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            result.textContent = "You win! Scissors beats Paper!";
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            result.textContent = "You win! Paper beats Rock!"
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            result.textContent = "You lose! Rock beats Scissors!";
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            result.textContent = "You lose! Scissors beats Paper!";
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            result.textContent = "You lose! Paper beats Rock!";
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        }
    }
}
playGame();