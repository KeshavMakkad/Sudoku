import newGame, { removeKEle } from "./js/gameLogic.js";
import { NUM_ROWS } from "./js/constants.js";

const sudokuBoard = document.querySelector(".board");
const numberBoard = document.querySelector(".numbers");

const generateBoard = () => {
  //Generate the tiles in the numbers which the player will select to add numbers in the main board
  for (let i = 0; i < NUM_ROWS; i++) {
    const numberTile = document.createElement("div"); // Generate the div in the numbers class
    numberTile.setAttribute("id", i + 1); //set the id of the number. Used later.
    numberTile.classList.add("tile"); // Add the class as tile to give styling
    numberTile.classList.add("numbers-tile");
    numberTile.innerText = i + 1; // Set the innertext as the umber
    numberBoard.appendChild(numberTile); // Add it to the numbers board
  }

  //Generate the tiles in the main game board.
  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_ROWS; j++) {
      const gameTile = document.createElement("div"); // Create the div
      const idOfGameTile = `${i + 1}-${j + 1}`; //Generate tje id of the tile
      gameTile.setAttribute("id", idOfGameTile); // Set the id of the tile
      gameTile.classList.add("tile"); // Add styling by using the tile class
      gameTile.classList.add("game-board-tile");
      sudokuBoard.appendChild(gameTile); //Append the div to the game board.....
    }
  }
};

const createNewGame = () => {
  const gameBoard = newGame();
  const emptyGameBoard = removeKEle(40, gameBoard);

  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_ROWS; j++) {
      const idOfGameTile = `${i + 1}-${j + 1}`;
      const tile = document.getElementById(idOfGameTile);
      tile.innerText = emptyGameBoard[i][j];
    }
  }
};

let active = 1;

const numberClicked = (selected) =>{
  const activeNumber = document.getElementById(active);
  const selectedNumber = document.getElementById(selected);
  activeNumber.classList.remove("active");
  selectedNumber.classList.add("active");
  active = selected;
}



const addEventListeners = () => {
  const newGameBtn = document.querySelector("#new-game-btn");
  newGameBtn.addEventListener("click", createNewGame);

  const numberTiles = document.querySelectorAll(".numbers-tile");
  for (let i = 0; i < numberTiles.length; i++) {
    numberTiles[i].addEventListener("click", () => {
      numberClicked(i+1);
    });
  }

  
};

generateBoard();
createNewGame();
addEventListeners();
