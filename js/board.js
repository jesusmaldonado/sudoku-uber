(function() {
  if (typeof Sudoku === "undefined") {
    window.Sudoku = {};
  }

  var Board = Sudoku.Board = function(container, inputString, answerString) {
    this.$container = container;
    this.inputString = inputString;
    this.answerString = answerString;
    this.$table = $("<table>")
    this.cells = []
    this.correctBlocks = 0;
    this.initialize()
  }


  Board.prototype.initialize = function() {
    this.$table.addClass("sudoku-table");
    for (var i = 0; i < 9; i++) {
        var $tr = $("<tr>");
      for (var j = 0; j < 9; j++) {
          var initialValue = parseInt(this.inputString.charAt(i * 9 + j), 10);
          var correctValue = parseInt(this.answerString.charAt(i * 9 + j), 10);
          var cell = new Sudoku.Cell(i, j, initialValue, correctValue, this);
          this.cells.push(cell);
          if (cell.correctStatus == true) {
            this.correctBlocks++
          }

          $td = $("<td>").append(cell.$input)
          $tr.append($td)
        }
        this.$table.append($tr);
    }
    this.$container.append(this.$table);
  };

  Board.prototype.highlight = function(cell) {

    var column = cell.column
    var row = cell.row
    var block = cell.block

    for (var i = 0; i < this.cells.length; i++) {

    }


  };

})();
