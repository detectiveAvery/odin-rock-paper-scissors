let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
    return computerChoice = "rock";
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    return computerChoice = "paper";
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    return computerChoice = "scissors";
  }
}

function getHumanChoice(humanChoice) {
  humanChoice = prompt("Please choice one of the three choices: rock, paper or scissors");
  console.log(humanChoice);
}

console.log(getComputerChoice(computerChoice));
getHumanChoice(humanChoice);