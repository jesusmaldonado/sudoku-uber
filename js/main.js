//this file instantiates the game
$(function () {
  var container = $("#sudoku-container");
  var str = sudoku.generate(80);
  var inputString = str.replace(/\./g, "0");
  var answerString = sudoku.solve(str);
  var game = new Sudoku.Game(container, inputString, answerString);
});
