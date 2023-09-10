// MouseDown.js

import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
import DragContainer from "../visualAssets/DragContainer.js";

const MouseDown = {
  setActiveCardAndPopulateDragArray: function () {
    // Get the mousePoint from VARS object
    let { mousePoint } = VARS;
    
    // Iterate through all visual assets to find the active card
    VARS.allVisualAssets.forEach((card) => {
      const { x, y, clickable, width, height, drawPile } = card;

      if (clickable) {
        let rect = { x, y, width, height };
        let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
        
        if (hit) {
          VARS.activeCard = card;

          if (card.resetDrawPileButton) return;

          // Calculate the difference between the mouse point and card position
          VARS.xyDiff.x = mousePoint.x - card.x;
          VARS.xyDiff.y = mousePoint.y - card.y;

          DragContainer.reset();

          if (card._index !== undefined) {
            // If the card belongs to a pile, add all cards above it to the DragContainer
            let pile = VARS.piles[card._index];
            let indexInPile = pile.indexOf(card);

            for (let i = indexInPile; i < pile.length; i++) {
              DragContainer.add(pile[i]);
            }
          } else if (!drawPile) {
            // If it's not a drawPile card, add the activeCard to the DragContainer
            DragContainer.add(VARS.activeCard);
          }
        }
      }
    });

    this.moveVisualAssetsToTop();
  },
  moveVisualAssetsToTop: function () {
    const { arr } = DragContainer;
    if (arr.length) {
      arr.forEach((card, i) => {
        card.storePosition();
        // Move the card to the top of visual assets
        let cardToShiftUp = Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets);
        cardToShiftUp.yOffset = i * VARS.spacing.buffer_larger;
        i++;
      });
    }
  },
};

export default MouseDown;
