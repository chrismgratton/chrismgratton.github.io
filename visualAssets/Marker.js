// Marker.js

import VARS from "../utils/Vars.js";

const Marker = function () {
  return {
    img: undefined,
    src: '/bmps/marker.png',
    x: undefined,
    y: undefined,
    clickable: false,
    drawPile: false,
    card: false,
    marker: true,
    height: undefined,
    width: undefined,

    // Build a marker object
    build: function (x, y, index) {
      this.img = new Image();
      this.img.src = this.src;
      this.x = x;
      this.y = y;
      this.height = VARS.build.cardHeight;
      this.width = VARS.build.cardWidth;
      this._index = index;
    },

    // Get the position of the marker
    getPosition: function () {
      return { x: this.x, y: this.y };
    },

    // Set the position of the marker
    setPosition: function (positionObject) {
      this.x = positionObject.x;
      this.y = positionObject.y;
    },

    // Set the clickability of the marker
    setClickability: function (boolean) {
      this.clickable = boolean;
    },

    // Reveal the marker (empty function)

    reveal: function () {
      // Empty function (no action needed)
    },
  };
};

export default Marker;
