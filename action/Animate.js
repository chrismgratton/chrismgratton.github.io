// Animate.js

import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
import DragContainer from '../visualAssets/DragContainer.js';

const Animate = {
  counter: 0,
  start: function() {
    const { mousePoint, xyDiff, ctx, canvas } = VARS;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let over = []; // Array to track mouse over state

    // Iterate through all visual assets
    VARS.allVisualAssets.forEach(card => {
      const { img, x, y, clickable } = card;

      // Draw the card image
      ctx.drawImage(img, x, y);

      if (clickable) {
        let rect = { x, y, width: 100, height: 150 };
        let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
        over.push(hit); // Add hit state to over array
      }

      if (DragContainer.includes(card)) {
        // If card is in DragContainer, update its position based on mouse movement
        let x = mousePoint.x - xyDiff.x;
        let y = (mousePoint.y - xyDiff.y) + card.yOffset;
        card.setPosition({ x, y });
      }
    });

    this.cursor(over.includes(true)); // Update cursor based on mouse over state

    requestAnimationFrame(() => this.start()); // Repeat the animation loop
  },
  cursor: function(boolean) {
    // Update cursor style based on mouse over state
    if (boolean) {
      VARS.canvas.style.cursor = "pointer";
    } else {
      VARS.canvas.style.cursor = "default";
    }
  }
};

export default Animate;
