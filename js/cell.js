(function(){
  if (typeof Sudoku === "undefined") {
    window.Sudoku = {};
  }

  var Cell = Sudoku.Cell = function(row, column, initialValue, correctValue, board) {
    this.row = row;
    this.block = Math.floor(row / 3) * 3 + Math.floor(column / 3);
    this.board = board;
    this.column = column;

    this.frozen = false;
    this.value = initialValue;
    this.correctValue = correctValue;
    this.correctStatus = false;

    this.$input = $("<input>")
    this.installEvents()
    this.initialize();
  }

  Cell.prototype.installEvents = function () {
    this.$input.on('click', this.handleClick.bind(this))
    this.$input.on('keyup', this.handleKeydown.bind(this))
  };

  Cell.prototype.initialize = function() {
    if (this.value > 0 && this.value <= 9) {
      this.$input.val(this.value);
      this.correctStatus = true;
      this.frozen = true;
      this.$input.attr('readonly', 'readonly');
    }

    //add some front-end validations
    this.$input.attr('maxlength', 1); //validate input to max length 1
  };

  Cell.prototype.groupedWith = function(otherCell) {
    if (otherCell.column === this.column || otherCell.row === this.row || otherCell.block === this.block) {
      return true;
    }
    return false;
  };

  Cell.prototype.equals = function(otherCell) {
    if (otherCell.column === this.column && otherCell.row === this.row && otherCell.block === this.block) {
      return true;
    }
    return false;
  }

  Cell.prototype.doesNotEqual = function(otherCell) {
    return !this.equals(otherCell);
  }
  //handlers

  Cell.prototype.handleClick = function(event) {
    this.board.highlight(this);
  };

  Cell.prototype.handleKeydown = function(event) {
    this.board.validateAnswer(this);
  };

  Cell.prototype.conflicts = function(otherCell) {
    if (this.doesNotEqual(otherCell) && this.$input.val() === otherCell.$input.val()) {
      this.$input.addClass("conflict");
      return true;
    }
    return false
    // setTimeout(this.wipe.bind(this), 2000)
  };

  Cell.prototype.wipe = function(){
    this.$input.val("");
  };

  Cell.prototype.doesNotConflict = function(){
    this.$input.removeClass("conflict");
  };

  //ui changes
  Cell.prototype.highlight = function() {
    this.$input.addClass("highlight");
  };

  Cell.prototype.normalize = function() {
    this.$input.removeClass("highlight");
  };


})();
