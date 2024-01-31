
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const winnerLoser = document.getElementById("winner-loser");
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");
let showingRules = false;

// Load the DOM before running the game
// Get the button elements and attach event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Return all of the buttons on the page
    let buttons = document.getElementsByClassName("btn");

    // Return each element in the buttons array on iteration
    for (let button of buttons) {
        // Listen for clicked button
        button.addEventListener("click", function() {
            // Call main game function
            let playerChoice = this.getAttribute("data-choice");
                runGame(playerChoice);
      });
    }       

    document.getElementById('toggle-rules').addEventListener('click', toggleRules);

});

// Toggle function

function toggleRules() {
    if (showingRules === false){
        document.getElementById('rules').classList.remove('hidden');
        showingRules = true;
    } else {
        document.getElementById('rules').classList.add('hidden');
        showingRules = false;
    }
}

// Main function accepts datachoice value of buttons

function runGame(playerChoice) {

    // Change player card to corresponding image 
    playerCard.src = `assets/images/icons/${choices[playerChoice]}.png`;
    playerCard.alt = choices[playerChoice];

    // Generate random number for computer choice
    let computerChoice = Math.floor(Math.random() * choices.length);

    // Change computer card to corresponding image
    computerCard.src = `assets/images/icons/${choices[computerChoice]}.png`;
    computerCard.alt = choices[computerChoice];

    // Check winner
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

// Update result to winnner/loser/tie message
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
 
/* Feature left to implement
// Return message describing choice relationship and outcome
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
  }
  
*/

function incrementPlayerScore() {

  let score = parseInt(playerScore.textContent);
  playerScore.textContent = score + 1;
}

function incrementComputerScore() {

  let score = parseInt(computerScore.textContent);
  computerScore.textContent = score + 1;
}

function resetScore() {

  document.getElementById('player-score').innerText = '0';
  document.getElementById('computer-score').innerText = '0';
  winnerLoser.textContent = "";
}