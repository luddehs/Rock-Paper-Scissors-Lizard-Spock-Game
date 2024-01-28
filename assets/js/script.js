
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const winnerLoser = document.getElementById("winner-loser");
const playerCard = document.getElementById("player-card");
const defaultCard = document.getElementById("default-card");
const computerCard = document.getElementById("computer-card");

// Load the DOM before running the game
// Get the button elements and attach event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Return all of the buttons on the page
    let buttons = document.getElementsByTagName("button");

    // Return each element in the buttons array on iteration
    for (let button of buttons) {
        // Listen for clicked button
        button.addEventListener("click", function() {
            // Alert displaying game type
            let gameType = this.getAttribute("aria-label");
                alert(`You clicked ${gameType}`);
      });
    }        
});

function runGame() {

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