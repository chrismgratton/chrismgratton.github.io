document.addEventListener("DOMContentLoaded", function() {

    console.log("Script loaded"); // Log when script is loaded

    let timerInterval;
    let seconds = 0;
    let minutes = 0;
    let startButton = document.getElementById("startButton");
    let instructionText = document.getElementById("instructionText");

    // Function to update the timer
    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        document.getElementById("timer").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Start/Continue Button functionality
    startButton.addEventListener("click", function() {
        console.log("Start/Continue button clicked"); 
        
        // Remove overlay
        document.getElementById("overlay").style.display = "none";
        
        // Start the timer
        timerInterval = setInterval(updateTimer, 1000);

        // Reset the instruction text
        instructionText.textContent = "Press Start to begin";
    });

    // Pause Button functionality
    document.getElementById("pauseButton").addEventListener("click", function() {
        console.log("Pause button clicked"); 

        // Stop the timer
        clearInterval(timerInterval);

        // Show overlay
        document.getElementById("overlay").style.display = "flex";

        // Change the instruction text
        instructionText.textContent = "Press Continue to resume the game";
        startButton.textContent = "Continue";
    });
});
