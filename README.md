Sudoku Solver
==
A sudoku game that utilizes a Game, Board, and Cell classes.

My aim for the project was to create an abstraction for the components of a typical sudoku game and maintain separation of concerns for readability.

Inheritance Diagram
==
![Game -> Board (has many) -> Cells][sudoku-inheritance]

MVP
==
**Game**

Responsibilities: Handles game state, visual logic outside the board.

**Board**

Responsibilities: Handles UI changes at the scale of the board, informs game of state.

**Cell**

Responsibilities: Validates individual input.

APIs/Resources
==
[Sudoku Generator Libary][sudoku-generator] for Sudoku String Generation

Google-Hosted jQuery v 2.1.3

Google Fonts


To-Do
==
Backtracing algorithm for people like me who aren't very good at Sudoku...

Maybe the board class knows too much?

Cells should update user of UI errors...

Testing using Mocha

[sudoku-inheritance]: http://i.imgur.com/xlTJeug.jpg?3
[sudoku-generator]: https://github.com/robatron/sudoku.js
