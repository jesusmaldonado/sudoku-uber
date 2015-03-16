//protect the global namespace
(function() {
  if (typeof Sudoku === "undefined") {
    window.Sudoku = {};
  }

  var Game = Sudoku.Game = function(container, inputString, answerString) {
    this.$container = container;
    this.inputString = inputString;
    this.answerString = answerString;
    this.board = new Sudoku.Board(this, container, inputString, answerString);
    this.installEvents()
  };

  Game.prototype.installEvents = function() {
      $(".play-again").on("click", this.newGame.bind(this));
      
  };

  Game

  Game.prototype.won = function() {
    var message = $(".winning-message");
    message.removeClass("hidden");
    this.$container.addClass("inactive")
  };

})();
