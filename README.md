# glass-tic-tac-toe
The classic Tic Tac Toe game with elements imitating glass.

## Requirements
Have **node.js** installed running version **^22.x.x** _(Skip below steps if you already have this version of node installed)_
- If using [brew](https://formulae.brew.sh/formula/node), use: ```brew install node@22```
- Otherwise, install node how you would otherwise for you dev environment


## Setup Guide
Quick steps to get this working. _I will use Yarn 1 (classic) as an example for commands._
1. Clone this repository to your local computer
2. Once cloned, navigate to the root of the project directory
3. Run: ```yarn install```
4. Run: ```yarn dev```
    - You should now see the app running on [http://localhost:3000](http://localhost:3000)

## How to Play
The goal of tic-tac-toe is to get 3 of your tiles in-a-row: horizontally, vertically, or diagonally. The player to get 3 tiles placed in the valid pattern first wins. The game can result in a draw (tie) if neither player successfully gets 3 tiles in-a-row.

Player 1 (blue) will start the game by selecting a tile. Player 2 (red) will place the next tile. This will be repeated until one player wins or a draw occurs. The last player to have placed a tile will start the next game. _Note: all tiles must be selected by one of the players for a draw to occur, even if a draw is inevitable._

To play again, press the "Play Again" button in the win/draw view. _Note: you may also refresh the browser for the same result._