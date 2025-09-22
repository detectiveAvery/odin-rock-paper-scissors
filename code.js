let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
    return computerChoice = "rock";
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    return computerChoice = "paper";
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    return computerChoice = "scissors";
  }
}

function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Please choose one of the three choices: rock, paper or scissors");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
