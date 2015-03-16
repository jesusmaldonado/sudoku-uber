(function(){
  if (typeof Sudoku === "undefined") {
    window.Sudoku = {};
  }

  var Cell = Sudoku.Cell = function(row, column, initialValue, correctValue, board) {
    this.row = row;
    this.block = Math.floor(row / 3) * 3 + Math.floor(column / 3);
    this.board = board;
    this.column = column;
    this.initialValue = initialValue;
    this.correctValue = correctValue;
    this.correctStatus = false;
    this.$input = $("<input>")
    this.installEvents()
    this.initialize();
  }

  Cell.prototype.installEvents = function () {
    this.$input.on('click', this.handleClick.bind(this))
    this.$input.on('keydown', this.changeValue.bind(this))
  };

  Cell.prototype.initialize = function() {
    if (this.initialValue > 0 && this.initialValue <= 9) {
      this.$input.val(this.initialValue);
      this.correctStatus = true;
    }

    //add some front-end validations
    this.$input.attr('maxlength', 1); //validate input to max length 1
  };

  Cell.prototype.handleClick = function(event) {
    this.board.highlight(this);
  };

  Cell.prototype.highlight = function() {

  };

  Cell.prototype.changeValue = function(event) {

  };


})();
