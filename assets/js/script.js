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