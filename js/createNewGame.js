import newGame, { removeKEle } from "./gameLogic.js";
import { NUM_ROWS } from "./constants.js";
import {
  getGameFromLocalStorage,
  setGameInLocalStorage,
} from "./localStorage.js";

let gameBoard, emptyGameBoard;

const createNewGame = (isNewGame) => {
  const items = getGameFromLocalStorage();
  if (!isNewGame && items) {
    ({ gameBoard, emptyGameBoard } = items);
  } else {
    gameBoard = newGame();
    emptyGameBoard = removeKEle(40, gameBoard);
  }

  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_ROWS; j++) {
      const idOfGameTile = `${i + 1}-${j + 1}`;
      const tile = document.getElementById(idOfGameTile);
      tile.innerText = emptyGameBoard[i][j];
      tile.classList.remove("wrong-active-ans");
    }
  }

  setGameInLocalStorage(emptyGameBoard, gameBoard);
  return gameBoard;
};

export default createNewGame;
export { gameBoard };
