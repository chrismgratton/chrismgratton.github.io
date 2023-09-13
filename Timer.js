let timerInterval;
let seconds = 0;
let minutes = 0;

// Function to update the timer
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("timer").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById("overlay").style.display = "flex";
    let startButton = document.getElementById("startButton");
    let instructionText = document.getElementById("instructionText");
    instructionText.textContent = "Press Continue to resume the game";
    startButton.textContent = "Continue";
}

function resumeTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded"); // Log when script is loaded

    let startButton = document.getElementById("startButton");
    let instructionText = document.getElementById("instructionText");

    // Start/Continue Button functionality
    startButton.addEventListener("click", function() {
        console.log("Start/Continue button clicked"); 
        resumeTimer();
        instructionText.textContent = "Press Start to begin";
    });

    // Pause Button functionality
    document.getElementById("pauseButton").addEventListener("click", function() {
        console.log("Pause button clicked"); 
        pauseTimer();
    });
});
