Sudoku Solver
==

[**Live Link**][live-link]

A sudoku game that utilizes a Game, Board, and Cell classes.

My aim for the project was to create an abstraction for the components of a typical sudoku game and maintain separation of concerns for readability.

Aesthetics
==
Thin, monochromatic.
![Screenshot][screenshot]


Inheritance Diagram
==
![Game -> Board (has many) -> Cells][sudoku-inheritance]

MVP
==
**Game**

Responsibilities: Handles game state, visual logic outside the board.

**Board**

Responsibilities: Orchestrates UI changes at the scale of the board, informs game of state.

**Cell**

Responsibilities: Validates individual input, handles UI changes for a cell.

APIs/Resources
==
[Sudoku Generator Libary][sudoku-generator] for Sudoku String Generation


Google-Hosted jQuery v 2.1.3

jQuery is a library

Google Fonts

Roboto is a pretty good font for slimness and readability.


Cross-Compatibility
==
Devices Tested: iPhone 6+, HTC ONE M8
Browsers: IE10, Firefox, Chrome, Safari

To-Do
==
Timer

Games Won

Backtracing algorithm for people like me who aren't very good at Sudoku...

Cells should update user of UI errors...

Opera testing

Testing using Mocha

Collaboration (Node?)

[screenshot]: http://i.imgur.com/P0o7S5A.png
[live-link]: http://www.jesusmaldonado.net/sudoku-uber/
[sudoku-inheritance]: http://i.imgur.com/xlTJeug.jpg?3
[sudoku-generator]: https://github.com/robatron/sudoku.js
