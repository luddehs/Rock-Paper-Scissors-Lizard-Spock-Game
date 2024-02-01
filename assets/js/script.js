
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const winnerLoser = document.getElementById("winner-loser");
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");
let showingRules = false;

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
});

/**
 * Toggle function enables and disables visibility of the rules section and updates the button icon.
 */
function toggleRules() {
  let rulesElement = document.getElementById('rules');
  if (showingRules === false) {
    rulesElement.classList.remove('hidden');
    document.getElementById('toggle-rules').insertAdjacentHTML('beforeend', '<i class="fa-solid fa-circle-minus"></i>');
    showingRules = true;
  } else {
    rulesElement.classList.add('hidden');
    document.getElementById('toggle-rules').querySelector('.fa-circle-minus').remove();
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
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScores(result);
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
function updateScores(result) {
    if (result === 'player') {
      incrementPlayerScore();
      winnerLoser.textContent = 'You win!';
    } else if (result === 'computer') {
      incrementComputerScore();
      winnerLoser.textContent = 'Computer wins!';
    } else {
      winnerLoser.textContent = "It's a tie!";
    }
  }
 
/* Feature left to implement -> Return message describing choice relationship and outcome.
function getComputerReaction(choice1, choice2) {
    
    const rules = {
        rock: {
        scissors: "Rock crushes Scissors",
        lizard: "Rock crushes Lizard",
      },
      paper: {
        rock: "Paper covers Rock",
        spock: "Paper disproves Spock",
      },
      scissors: {
        paper: "Scissors cuts Paper",
        lizard: "Scissors decapitates Lizard",
      },
      lizard: {
        spock: "Lizard poisons Spock",
        paper: "Lizard eats Paper",
      },
      spock: {
        scissors: "Spock smashes Scissors",
        rock: "Spock vaporizes Rock",
      },
    };
    return rules[choice1][choice2] || "";
} */


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
}