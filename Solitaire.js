// Importing required modules and components
import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import Deck from './cards/Deck.js';
import MouseDown from './action/MouseDown.js';
import MouseUp from './action/MouseUp.js';
import Animate from './action/Animate.js';
import NewBoard from './newgame.js';

// Definition of the Solitaire object
const Solitaire = {
    canvas: undefined,

    // Initialization function for the Solitaire game
    init: function () {
        VARS.init(); // Initialize VARS module
        this.canvas = VARS.canvas; // Assign canvas element

        Deck.build(); // Build the deck
        Deal.start(); // Start dealing cards
        this.addListeners(); // Add event listeners
        
        Animate.start(); // Start the animation loop
    },

    // Add event listeners to the canvas
    addListeners: function () {
        this.mouseMoveHandler(); // Add mouse move event listener
        this.mouseDownHandler(); // Add mouse down event listener
        this.mouseUpHandler(); // Add mouse up event listener
        this.mouseOutHandler(); // Add mouse out event listener

    

    },

    // Event handler for mouse move
    mouseMoveHandler: function () {
        this.canvas.addEventListener('mousemove', e => {
            let leftOffset = (window.innerWidth - VARS.canvas.width) / 2;
            VARS.mousePoint = {x: e.pageX - leftOffset, y: e.pageY};
        })
    },

    // Event handler for mouse down
    mouseDownHandler: function () {
        this.canvas.addEventListener('mousedown', () => {
            MouseDown.setActiveCardAndPopulateDragArray();
        })
    },

    // Event handler for mouse up
    mouseUpHandler: function () {
        this.canvas.addEventListener('mouseup', e => {
            if (VARS.activeCard) MouseUp.activeCardExists();
        });
    },

    // Event handler for mouse out
    mouseOutHandler: function () {
        this.canvas.addEventListener('mouseout', e => {
            if (VARS.activeCard) MouseUp.activeCardExists();
        });
    }


};




export default Solitaire; // Export the Solitaire object
