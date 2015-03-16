(function() {
  if (typeof Sudoku === "undefined") {
    window.Sudoku = {};
  }

  var Board = Sudoku.Board = function(game, container, inputString, answerString) {
    this.game = game;
    this.$container = container;
    this.inputString = inputString;
    this.answerString = answerString;
    this.$table = $("<table>")
    this.cells = []
    this.initialCorrect = 0;
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
            this.initialCorrect++
          }

          $td = $("<td>").append(cell.$input)
          $tr.append($td)
        }
        this.$table.append($tr);
    }
    this.$container.append(this.$table);
  };

  Board.prototype.highlight = function(cell) {
    for (var i = 0; i < this.cells.length; i++) {
      var sampleCell = this.cells[i];
      if (cell.groupedWith(sampleCell)) {
        sampleCell.highlight()
      } else {
        sampleCell.normalize()
      }
    }
  };

  Board.prototype.validateAnswer = function(cell) {
    var answer = cell.$input.val()
    var totalCorrect = this.initialCorrect
    for (var i = 0; i < this.cells.length; i++) {
      var sampleCell = this.cells[i];
      var sampleCellAnswer = sampleCell.$input.val()
      sampleCell.doesNotConflict()

      //check for conflicts
      if (cell.groupedWith(sampleCell)) {
        var cellConflicts = sampleCell.conflicts(cell);
        if (cellConflicts) {
          setTimeout(cell.wipe.bind(cell), 2500);
          setTimeout(sampleCell.doesNotConflict.bind(sampleCell), 2500);
        }
      }
      //check if right answer
      if (sampleCellAnswer == sampleCell.correctValue && !sampleCell.frozen) {
        totalCorrect++;
      }
    }
    console.log("hi")
    if (totalCorrect === 81) {
      this.game.won();
    }
  };

})();
