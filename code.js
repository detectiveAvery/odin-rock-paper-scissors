let computerChoice;

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

console.log(getComputerChoice(computerChoice));