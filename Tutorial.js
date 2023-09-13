let currentTutorialSection = 0;
let tutorialSections; 

document.addEventListener("DOMContentLoaded", function() {
    tutorialSections = document.querySelectorAll('.tutorial-section'); // initialize it here

    document.getElementById('tutorialButton').addEventListener('click', function() {
        document.getElementById('tutorialOverlay').style.display = 'block';
        updateTutorialNavigation();
        pauseTimer();  // Assuming pauseTimer is globally accessible
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentTutorialSection++;
        updateTutorialNavigation();
    });

    document.getElementById('prevButton').addEventListener('click', function() {
        currentTutorialSection--;
        updateTutorialNavigation();
    });

    document.getElementById('closeTutorialButton').addEventListener('click', function() {
        document.getElementById('tutorialOverlay').style.display = 'none';
        resumeTimer(); // Assuming resumeTimer is globally accessible
    });

    function updateTutorialNavigation() {
        for (let i = 0; i < tutorialSections.length; i++) {
            if (i === currentTutorialSection) {
                tutorialSections[i].style.display = 'block';
            } else {
                tutorialSections[i].style.display = 'none';
            }
        }
        document.getElementById('prevButton').style.display = currentTutorialSection === 0 ? 'none' : 'block';
        document.getElementById('nextButton').style.display = currentTutorialSection === tutorialSections.length - 1 ? 'none' : 'block';
    }
});
