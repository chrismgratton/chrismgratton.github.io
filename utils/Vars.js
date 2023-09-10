// Definition of the VARS object
const VARS = {
    // Arrays and variables to store game-related data
    allVisualAssets: [], // Array to store all visual assets (cards, markers, etc.)
    mousePoint: {x: 0, y: 0}, // Current position of the mouse pointer
    xyDiff: {x: 0, y: 0}, // Difference between mouse position and card position for smooth dragging
    activeCard: undefined, // Currently active card being interacted with
    deck: [], // Array to store the deck of cards
    piles: {}, // Object to store the card piles
    slots: [], // Array to store the slots for cards
    ctx: undefined, // Canvas 2D rendering context
    canvas: document.querySelector('canvas'), // Reference to the canvas element

    // Initialization function to set up the canvas context
    init: function () {
        this.ctx = this.canvas.getContext('2d');
    },

    // Spacing configuration for visual assets
    spacing: {
        buffer: 10, // Buffer spacing between elements
        buffer_larger: 40, // Larger buffer spacing
        slot_spacer: 50 // Spacing between slots
    },

    // Configuration for card and canvas dimensions
    build: {
        cardWidth: 100, // Width of a card
        cardHeight: 150, // Height of a card
        canvasWidth: 1000, // Width of the canvas
        canvasHeight: 800, // Height of the canvas
        suits: ["clubs", "diamonds", "hearts", "spades"], // Array of card suits
        ranks: ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine",
         "ten", "jack", "queen", "king"] // Array of card ranks
    }, 

    // Function to reset values when needed
    resetValues: function () {
        this.activeCard = undefined; // Reset the active card
        this.dragContainer.forEach (card => {
            card.yOffset = 0; // Reset the y offset for cards in the drag container
        });
        this.dragContainer = []; // Reset the drag container
    }
}

export default VARS; // Export the VARS object
