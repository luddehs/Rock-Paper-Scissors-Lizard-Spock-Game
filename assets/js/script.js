
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

} 

function compareChoices() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function computerReaction() {

}

function resetScore() {
    
}