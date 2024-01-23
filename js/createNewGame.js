import newGame, { removeKEle } from "./gameLogic.js";
import { NUM_ROWS } from "./constants.js";
import { generateBoard } from "./generateGameBoard.js";

export let gameBoard;

const createNewGame = () => {
  const CreateGameBoard = newGame();
  const emptyGameBoard = removeKEle(40, CreateGameBoard);

  gameBoard = JSON.parse(JSON.stringify(CreateGameBoard));
  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_ROWS; j++) {
      const idOfGameTile = `${i + 1}-${j + 1}`;
      const tile = document.getElementById(idOfGameTile);
      tile.innerText = emptyGameBoard[i][j];
    }
  }
  return gameBoard;
};

export default createNewGame;
