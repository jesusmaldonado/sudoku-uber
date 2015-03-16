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
      $(".play-again").on("click", this.playAgain.bind(this));
      $(".control-buttons").on("click", ".control", this.changeDifficulty.bind(this));
      $(".reset").on("click", this.reset.bind(this))
      $(".solve").on("click", this.solve.bind(this))
      $(".reload").on("click", this.reload.bind(this))
  };

  Game.prototype.playAgain = function() {
    var difficulty = $(".current-difficulty").html()
    this.resetBoard(difficulty);
    $(".winning-message").addClass("hidden");
  }

  Game.prototype.reset = function(){
    this.$container.empty();
    console.log("reset")
    this.board = new Sudoku.Board(this, this.$container, this.inputString, this.answerString);
  }

  Game.prototype.reload = function(){

  }

  Game.prototype.solve = function(){
    console.log("solve")
    this.board.solve()
  }

  Game.prototype.changeDifficulty = function(event){
    var controls = $(".control-buttons").find("a").removeClass("current-difficulty")
    var newDifficulty = $(event.currentTarget)
    newDifficulty.addClass("current-difficulty")
    var difficulty = newDifficulty.html();
    this.resetBoard(difficulty);
  };

  Game.prototype.resetBoard = function(difficulty) {
    if (difficulty === "baby") {
      difficulty = 80;
    }
    this.$container.empty();
    this.$container.removeClass("inactive");
    var str = sudoku.generate(difficulty);
    this.inputString = str.replace(/\./g, "0");
    this.answerString = sudoku.solve(str);

    this.board = new Sudoku.Board(this, this.$container, this.inputString, this.answerString);

  }


  Game.prototype.won = function() {
    var message = $(".winning-message");
    message.removeClass("hidden");
    this.$container.addClass("inactive")
    this.board.deactivate()
  };

})();
