import { NUM_ROWS } from "./constants.js";
import createNewGame from "./createNewGame.js";

const sudokuBoard = document.querySelector(".board");
const numberBoard = document.querySelector(".numbers");

const generateNumberBoard = () => {
  //Generate the tiles in the numbers which the player will select to add numbers in the main board
  for (let i = 0; i < NUM_ROWS; i++) {
    const numberTile = document.createElement("div"); // Generate the div in the numbers class
    numberTile.setAttribute("id", i + 1); //set the id of the number. Used later.
    numberTile.classList.add("tile"); // Add the class as tile to give styling
    numberTile.classList.add("numbers-tile");
    numberTile.innerText = i + 1; // Set the innertext as the umber
    numberBoard.appendChild(numberTile); // Add it to the numbers board
  }
};

const generateGameBoard = () => {
  //Generate the tiles in the main game board.
  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_ROWS; j++) {
      const gameTile = document.createElement("div"); // Create the div
      const idOfGameTile = `${i + 1}-${j + 1}`; //Generate tje id of the tile
      gameTile.setAttribute("id", idOfGameTile); // Set the id of the tile
      gameTile.classList.add("tile"); // Add styling by using the tile class
      gameTile.classList.add("game-board-tile");
      if ((i + 1) % 3 === 0) gameTile.classList.add("game-bottom-tile");
      if ((j + 1) % 3 === 0) gameTile.classList.add("game-right-tile");
      sudokuBoard.appendChild(gameTile); //Append the div to the game board.....
    }
  }
};

export function generateBoard() {
  generateNumberBoard();
  generateGameBoard();
  createNewGame();
}
