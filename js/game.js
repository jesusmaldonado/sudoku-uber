//protect the global namespace
(function() {
  if (typeof Sudoku === "undefined") {
    window.Sudoku = {};
  }

  var Game = Sudoku.Game = function(container, inputString, answerString) {
    this.$container = container;
    this.inputString = inputString;
    this.answerString = answerString;
    this.board = new Sudoku.Board(container, inputString, answerString);
  };

  //this function should initialize the table, and add all inputs to the GameView
  Game.prototype.initialize = function() {
    
  };

  Game.prototype.validateResponse = function(event){

  }



})();
