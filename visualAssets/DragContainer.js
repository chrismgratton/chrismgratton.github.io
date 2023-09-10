// DragContainer.js

const DragContainer = {
    arr: [],
  
    // Add a card to the drag container
    add: function (card) {
      this.arr.push(card);
    },
  
    // Get the length of the drag container (number of cards)
    length: function () {
      return this.arr.length;
    },
  
    // Check if the drag container includes a specific card
    includes: function (card) {
      return this.arr.includes(card);
    },
  
    // Return the cards in the drag container to their original position
    returnCards: function () {
      this.arr.forEach((card) => {
        card.resetPositionToStore();
      });
    },
  
    // Reset the drag container
    reset: function () {
      this.arr.forEach((card) => {
        card.yOffset = 0;
      });
      this.arr = [];
    },
  };
  
  export default DragContainer;
  