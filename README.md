Sudoku Solver
==

[**Live Link**][live-link]

A sudoku game that utilizes a Game, Board, and Cell classes.

My aim for the project was to create an abstraction for the components of a typical sudoku game and maintain separation of concerns for readability. The project hooks unto a library API.

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

Responsibilities: Validates individual input, handles UI changes for a cell. **Note: I opted for more memory usage in order to keep an O(n) by having cells hold onto their row, column, and block attributes. I was afraid iterating multiple times or through an array of arrays would be too slow. I'm only ever going through 81 elements at a time. I was already doing a lot of manipulations in jQuery so I wanted to minimize runtime.**

APIs/Resources
==
**[Sudoku Generator Libary][sudoku-generator]**

For Sudoku String Generation.


**Google-Hosted jQuery v 2.1.3**

jQuery moves mountains.

**Google Fonts**

Roboto is a pretty good font for slimness and readability.


Cross-Compatibility
==
**Devices Tested**

iPhone 6+, HTC ONE M8

**Browsers**

IE10, Firefox, Chrome, Safari

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
