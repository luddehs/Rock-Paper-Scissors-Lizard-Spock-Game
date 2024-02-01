const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const winnerLoser = document.getElementById("winner-loser");
const winnerLoserMessage = document.getElementById("winner-loser-2");
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");
let showingRules = false;
const rules = {
  rock: {
    scissors: "Rock crushes Scissors",
    lizard: "Rock crushes Lizard",
    paper: "Paper covers Rock",
    spock: "Spock vaporizes Rock",
},
paper: {
  rock: "Paper covers Rock",
  spock: "Paper disproves Spock",
  scissors: "Scissors cuts Paper",
  lizard: "Lizard eats Paper",
},
scissors: {
  paper: "Scissors cuts Paper",
  lizard: "Scissors decapitates Lizard",
  rock: "Rock crushes Scissors",
  spock: "Spock smashes Scissors",
},
lizard: {
  spock: "Lizard poisons Spock",
  paper: "Lizard eats Paper",
  rock: "Rock crushes Lizard",
  scissors: "Scissors decapitates Lizard",
},
spock: {
  scissors: "Spock smashes Scissors",
  rock: "Spock vaporizes Rock",
  paper: "Paper disproves Spock",
  lizard: "Lizard poisons Spock",
},
};

/**
 * Event listener loading the DOM before running the game.
 * Click event listeners attaches to game buttons and the rules toggle button.
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("btn");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
                runGame(playerChoice);
      });
    }       
    document.getElementById('toggle-rules').addEventListener('click', toggleRules);
    document.getElementById('reset-score').addEventListener('click', resetScore);
});

/**
 * Toggle function enables and disables visibility of the rules section and updates the button icon.
 */
function toggleRules() {
  let rulesElement = document.getElementById('rules');
  if (showingRules === false) {
    rulesElement.classList.remove('hidden');
    document.getElementById('rules-icon').classList.remove('fa-circle-plus');
    document.getElementById('rules-icon').classList.add('fa-circle-minus');
    showingRules = true;
  } else {
    rulesElement.classList.add('hidden');
    document.getElementById('rules-icon').classList.add('fa-circle-plus');
    document.getElementById('rules-icon').classList.remove('fa-circle-minus');
    showingRules = false;
  }
}

/**
 * Main function accepts datachoice value of buttons and the runs the game with the player's choice as input.
 * It generates a random computer choice, updates player and computer card/image, and then checks for the winner.
 */
function runGame(playerChoice) {
    playerCard.src = `assets/images/icons/player/${choices[playerChoice]}-p.png`;
    playerCard.alt = choices[playerChoice];
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerCard.src = `assets/images/icons/computer/${choices[computerChoice]}-c.png`;
    computerCard.alt = choices[computerChoice];
    let result = checkWinner(choices[playerChoice], choices[computerChoice] );
    const message = rules[choices[computerChoice]][choices[playerChoice]];
    updateScores(result, message);
} 

// Compare choices and determine the winner
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
      return 'tie';
    } else if (
      (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
      return 'player';
    } else {
      return 'computer';
    }
}

/**
 * Determines the outcome of each turn and returns message based in result.
 */
function updateScores(result, message) {
    if (result === 'player') {
      incrementPlayerScore();
      winnerLoser.textContent = `You win!`;
      winnerLoserMessage.textContent = message;
    } else if (result === 'computer') {
      incrementComputerScore();
      winnerLoser.textContent = `Computer wins!`;
      winnerLoserMessage.textContent = message;
    } else {
      winnerLoser.textContent = "It's a tie!";
      winnerLoserMessage.textContent = '';
    }
}
 

/**
 * Increments score by 1 if player wins.
 */
function incrementPlayerScore() {
  let score = parseInt(playerScore.textContent);
  playerScore.textContent = score + 1;
}

/**
 * Increments score by 1 if computer wins.
 */
function incrementComputerScore() {
  let score = parseInt(computerScore.textContent);
  computerScore.textContent = score + 1;
}

/**
 * Resets score to 0 and removes winner, loser and tie message.
 */
function resetScore() {
  document.getElementById('player-score').innerText = '0';
  document.getElementById('computer-score').innerText = '0';
  winnerLoser.textContent = "\u00A0";
  winnerLoserMessage.textContent = "\u00A0";
}