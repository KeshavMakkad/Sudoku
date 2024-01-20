import newGame, { removeKEle } from "./js/GameLogic.js";

const sudokuBoard = document.querySelector(".board");
const numberBoard = document.querySelector(".numbers");

const generateBoard = () => {
  //Generate the tiles in the numbers which the player will select to add numbers in the main board
  for (let i = 0; i < 9; i++) {
    const numberTile = document.createElement("div"); // Generate the div in the numbers class
    numberTile.setAttribute("id", i + 1); //set the id of the number. Used later.
    numberTile.classList.add("tile"); // Add the class as tile to give styling
    numberTile.innerText = i + 1; // Set the innertext as the umber
    numberBoard.appendChild(numberTile); // Add it to the numbers board
  }

  //Generate the tiles in the main game board.
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const gameTile = document.createElement("div"); // Create the div
      const idOfGameTile = `${i + 1}-${j + 1}`; //Generate tje id of the tile
      gameTile.setAttribute("id", idOfGameTile); // Set the id of the tile
      gameTile.classList.add("tile"); // Add styling by using the tile class
      sudokuBoard.appendChild(gameTile); //Append the div to the game board.....
    }
  }
};

const createNewGame = () => {
  const gameBoard = newGame();
  const emptyGameBoard = removeKEle(40, gameBoard);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const idOfGameTile = `${i + 1}-${j + 1}`;
      const tile = document.getElementById(idOfGameTile);
      if (emptyGameBoard[i][j]) tile.innerText = gameBoard[i][j];
    }
  }

  console.log(gameBoard);
};

generateBoard();
createNewGame();
