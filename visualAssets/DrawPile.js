// DrawPile.js

import VARS from "../utils/Vars.js";
import Utils from '../utils/Utils.js';
import FlipPile from './FlipPile.js';
import Testing from '../utils/Testing.js';

const DrawPile = {
  arr: [],        // Array to store the cards in the draw pile
  resetButton: undefined,  // Reset button for the draw pile
  x: undefined,   // X-coordinate for the draw pile

  // Create the draw pile
  create: function(arr, init, x) {
    this.x = x;

    let yVal = VARS.build.cardHeight + VARS.spacing.buffer_larger;
    let topCard;

    arr.forEach((card) => {
      card.setDrawPile(true);
      card.setPosition({ x, y: yVal });
      card.reveal(false);

      yVal += 0.25;

      if (init) {
        this.arr.push(card);
      }

      topCard = card;
    });

    topCard.setClickability(true);
  },

  // Create the reset button for the draw pile
  createResetButton: function(xOffset, y) {
    let img = new Image();
    img.src = '/bmps/marker.png';
    
    this.resetButton = {
      img,
      x: xOffset,
      y,
      clickable: false,
      resetDrawPileButton: true,
      width: VARS.build.cardWidth,
      height: VARS.build.cardHeight
    };
    
    VARS.allVisualAssets.unshift(this.resetButton);
  },

  // Handle click event on the draw pile
  clickHandler: function() {
    FlipPile.clearClickabilities();

    let top3 = this.arr.splice(-3).reverse();

    for (let i = 0; i < top3.length; i++) {
      let card = top3[i];

      Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets);
      card.setClickability(false);
      card.setDrawPile(false);
      card.setFlipPile(true);
      
      let cardPosition = {
        y: (VARS.build.cardHeight * 2 + 60) + (i * 10),
        x: card.getPosition().x
      };
      
      card.setPosition(cardPosition);
      card.reveal(true);
    }

    FlipPile.arr = [...FlipPile.arr, ...top3];

    if (this.arr.length === 0) {
      FlipPile.allowReset = true;
      this.resetButton.clickable = true;
    } else {
      let topFlipPileCard = Utils.returnLastArrayItem(this.arr);
      topFlipPileCard.setClickability(true);
    }

    let topCard = Utils.returnLastArrayItem(FlipPile.arr);
    topCard.setClickability(true);
  },

  // Reset the draw pile
  reset: function() {
    this.arr = [...FlipPile.arr].reverse();
    this.create(this.arr, false, this.x);
    this.resetButton.clickable = false;
    FlipPile.reset();
  }
};

export default DrawPile;
