// Slot.js

import VARS from "../utils/Vars.js";

const Slot = function () {
  return {
    img: undefined,
    x: undefined,
    y: undefined,
    clickable: false,
    drawPile: false,
    card: false,
    marker: false,
    slot: true,
    rank: 1,
    suit: undefined,
    width: undefined,
    height: undefined,

    // Build a slot object
    build: function (x, y, imgString, suit) {
      this.img = new Image();
      this.img.src = imgString;
      this.x = x;
      this.y = y;
      this.suit = suit;
      this.height = VARS.build.cardHeight;
      this.width = VARS.build.cardWidth;
    },

    // Increase the rank of the slot
    increaseSlotRank: function () {
      this.rank++;
    },

    // Get the position of the slot
    getPosition: function () {
      return { x: this.x, y: this.y };
    },

    // Set the position of the slot
    setPosition: function (positionObject) {
      this.x = positionObject.x;
      this.y = positionObject.y;
    },

    // Set the clickability of the slot
    setClickability: function (boolean) {
      this.clickable = boolean;
    },

    // Reveal the slot (empty function)

    reveal: function () {
      // Empty function (no action needed)
    },
  };
};

export default Slot;
