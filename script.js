let types = ['Rock', 'Paper', 'Scissors'];

const result = document.querySelector('.result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let p1pick = document.querySelector('.p1-pick');
let cpupick = document.querySelector('.cpu-pick');
let p1score = document.querySelector('.p1-score');
let cpuscore = document.querySelector('.cpu-score');
let winner = document.querySelector('.winner');

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;



playRound = () => {
  if (playerScore >= 5){
    playerScore = 0;
    computerScore = 0;
    winner.innerHTML = 'Player One';
  } else if (computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    winner.innerHTML = 'Computer';
  };

  let computerSelection = types[Math.floor(Math.random() * types.length)];
  p1pick.innerHTML = playerSelection;
  cpupick.innerHTML = computerSelection;
  if (playerSelection === computerSelection) {
    result.innerHTML = 'This is a tie game';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors' || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
    result.innerHTML = 'Player One wins this round ';
    playerScore++;
    p1score.innerHTML = playerScore;
    cpuscore.innerHTML = computerScore;
  } else {
    result.innerHTML = 'Computer wins this round ';
    computerScore++;
    p1score.innerHTML = playerScore;
    cpuscore.innerHTML = computerScore;
  }
};


rock.addEventListener('click', (e) => {
  e.preventDefault();
  playerSelection = "Rock";
  playRound();
});

paper.addEventListener('click', (e) => {
  e.preventDefault();
  playerSelection = "Paper";
  playRound();
});

scissors.addEventListener('click', (e) => {
  e.preventDefault();
  playerSelection = "Scissors";
  playRound();
});

