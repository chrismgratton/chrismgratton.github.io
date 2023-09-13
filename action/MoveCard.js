import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
import FlipPile from '../visualAssets/FlipPile.js';
import DragContainer from '../visualAssets/DragContainer.js';

let moveCount = 0; // Declare moveCount as a regular variable

const MoveCard = {
  // Define an audio element for the card move sound
  cardMoveSound: new Audio('./move-sound.mp3'),
  foundationSound: new Audio('./foundation-sound.mp3'), 

  // Function to check if the active card can be moved to a target card
  moveCardListener: function(activeCard) {
    let possibleDestinationCards = [...VARS.slots, ...Object.keys(VARS.piles).map(item => Utils.returnLastArrayItem(VARS.piles[item]))];

    // Find a valid target card based on collision detection and move rules
    let target = possibleDestinationCards.find(card => {
      if (Utils.rectangleRectangleCollisionDetection(card, activeCard)) {
        let alternatingSuitAndOneLower = (card.color !== activeCard.color && card.rank === (activeCard.rank + 1));
        let slotHit = card.rank === activeCard.rank && card.suit === activeCard.suit && card.slot && DragContainer.length() === 1;

        if (slotHit || alternatingSuitAndOneLower || (card.marker && activeCard.rank === 13 && !card.card)) {
          return true;
        }
      }
    });

    return target ? { hit: true, target } : { hit: false };
  },

  // Function to perform the move of the active card to the target card
  moveCard: function(target, activeCard) {
    let { x, y, _index: pileKey, slot, marker } = target;
    let { _index, flipPile } = activeCard;
    let markerAdjust = marker ? 0 : 1;

    let tempArray = !flipPile ? VARS.piles[_index] : FlipPile.arr;

    // Increment the move counter
    moveCount++;
    updateMoveCounter();
     if (activeCard.rank === 1 && slot) {   
      this.foundationSound.play();  // Play the foundation sound
    } else {
      this.cardMoveSound.play();    // Play the normal card move sound
    }
    // Play the card move sound
    this.cardMoveSound.play();

    DragContainer.arr.forEach((card, i) => {
      tempArray.splice(tempArray.indexOf(card), 1);
      let yPos = y;

      if (!slot) {
        VARS.piles[pileKey].push(card);
        card.setIndex(+pileKey);
        yPos = y + VARS.spacing.buffer_larger * (i + markerAdjust);
      } else {
        target.increaseSlotRank();
        card.setClickability(false);
      }

      card.setPosition({ x, y: yPos });
    });

    this.revealNextCard(tempArray);
  },

  // Function to reveal the next card in the array
  revealNextCard: function(arr) {
    if (arr.length) {
      let newTopCard = Utils.returnLastArrayItem(arr);
      if (!newTopCard.marker) {
        newTopCard.reveal(true);
        newTopCard.setClickability(true);
      }
    }
  },
};

// Function to update the displayed move count
function updateMoveCounter() {
  document.getElementById("moveCounter").innerText = `Moves: ${moveCount}`;
}

export default MoveCard;
