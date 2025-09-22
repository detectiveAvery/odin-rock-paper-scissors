function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
      if (computerChoice === 'rock') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. It's a tie!`);
      } else if (computerChoice === 'paper') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. Human loses! Computer wins!`);
        computerScore += 1;
      } else if (computerChoice === 'scissors') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. Computer loses! Humans wins!`);
        humanScore += 1;
      }
    } else if (humanChoice === 'paper') {
      if (computerChoice === 'rock') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. Computer loses! Humans wins!`);
        humanScore += 1;
      } else if (computerChoice === 'paper') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. It's a tie!`);
      } else if (computerChoice === 'scissors') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. Human loses! Computer wins!`);
        computerScore += 1;
      }
    } else if (humanChoice === 'scissors') {
      if (computerChoice === 'rock') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. Human loses! Computer wins!`);
        computerScore += 1;
      } else if (computerChoice === 'paper') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. Computer loses! Humans wins!`);
        humanScore += 1;
      } else if (computerChoice === 'scissors') {
        alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. It's a tie!`);
      }
    }
  }

  playFiveRounds(playRound);

  alert(`Computer: ${computerScore} - Human: ${humanScore} - ${getWinner(computerScore, humanScore)}`);
}

function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return computerChoice = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    return computerChoice = "scissors";
  }
}

function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Please choose one of the three choices: rock, paper or scissors");
  return humanChoice;
}

function playFiveRounds(playRound) {
  for (let index = 0; index < 5; index++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

function getWinner(computerScore, humanScore) {
  if (computerScore > humanScore) {
    return "Computer Wins!";
  } else if (humanScore > computerScore) {
    return "Human Wins!"
  } else if (computerScore === humanScore) {
    return "Draw!"
  }
}

playGame();
