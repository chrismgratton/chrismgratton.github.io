// MouseUp.js

import MoveCard from '../action/MoveCard.js';
import VARS from '../utils/Vars.js';
import DrawPile from '../visualAssets/DrawPile.js';
import DragContainer from '../visualAssets/DragContainer.js';

const MouseUp = {
  activeCardExists: function () {
    // Get the activeCard from VARS object
    const { activeCard } = VARS;
    
    // Check if the activeCard is for resetting the DrawPile
    if (activeCard.resetDrawPileButton) {
      // If activeCard is the reset button, reset the DrawPile
      DrawPile.reset();
    }
    // Check if the activeCard is for drawing a card from DrawPile
    else if (activeCard.drawPile) {
      // If activeCard is the DrawPile, handle the click
      DrawPile.clickHandler();
    }
    else {
      // If the activeCard is for moving to a target card
      let result = MoveCard.moveCardListener(activeCard);

      if (result.hit) {
        // If a valid target is found, move the card to the target
        MoveCard.moveCard(result.target, activeCard);
      } else {
        // If no valid target is found, return the cards to their original position
        DragContainer.returnCards();
      }
    }

    // Reset the DragContainer and activeCard
    DragContainer.reset();
    VARS.activeCard = undefined;
  }
};

export default MouseUp;
