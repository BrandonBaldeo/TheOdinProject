let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let choice = ['rock', 'paper', 'scissors'];
  let num = Math.floor(Math.random() * 3);
  return choice[num];
};

const playRound = (
  playerSelection,
  computerSelection = getComputerChoice()
) => {
  playerSelection = prompt('Pick "rock","paper" or "scissors');
  if (computerSelection == 'rock' && playerSelection == 'scissors') {
    return ['You Lose! Rock beats Scissors', -1];
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    return ['You Win! Scissors beats Paper', 1];
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    return ['You Lose! Paper beats Rock', -1];
  } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    return ['You Win! Rock beats Scissors', 1];
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    return ['You Lose! Scissors beats Paper', -1];
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
    return ['You Win! Paper beats Rock', 1];
  } else {
    return ['Tie', 0];
  }
};

const game = () => {
  let winner;
  for (let i = 0; i < 5; i++) {
    let [resultString, resultNumber] = playRound(
      playerSelection,
      computerSelection
    );
    if (resultNumber == -1) {
      computerScore++;
    } else if (resultNumber == 1) {
      playerScore++;
    }
    console.log(resultString);
  }
  if (playerScore === computerScore) {
    return 'Tied Score';
  }
  if (Math.max(playerScore, computerScore) === playerScore) {
    winner = 'Player';
  } else {
    winner = 'Computer';
  }
  return `The Winner is: ${winner}`;
};

console.log(game());
