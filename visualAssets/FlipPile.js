// FlipPile.js

import DrawPile from "./DrawPile.js";
import VARS from "../utils/Vars.js";
import Utils from '../utils/Utils.js';

const FlipPile = {
  arr: [], // Array to store flipped cards
  allowReset: false, // Flag to allow reset of the flip pile

  // Clear clickabilities of all cards in the flip pile
  clearClickabilities: function () {
    this.arr.forEach(card => {
      card.setClickability(false);
    });
  },

  // Reset the flip pile
  reset: function () {
    this.arr = [];
    this.allowReset = false;
  },
};

export default FlipPile;
