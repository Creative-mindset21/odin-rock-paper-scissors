let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const userInput = prompt(
    "Choose a value: 'Rock', 'Paper', 'Scissors'",
  ).toLowerCase();
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You win! You chose ${humanChoice} while computer chose ${computerChoice}`,
    );
  } else {
    computerScore++;
    console.log(
      `You lost! You chose ${humanChoice} while computer chose ${computerChoice}`,
    );
  }
}

function playGame() {
  const playerScoreEL = document.getElementById("player-score");
  const computerScoreEL = document.getElementById("computer-score");
  for (let i = 0; i < 5; i++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    playRound(human, computer);
  }
  playerScoreEL.textContent = humanScore;
  computerScoreEL.textContent = computerScore;
}

playGame();
