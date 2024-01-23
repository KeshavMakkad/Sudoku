import { gameBoard } from "./createNewGame.js";
import { active } from "./numberTileClicked.js";

const isValid = (row, colm) => {
  return gameBoard[row][colm] == active;
};

const wrongAns = (clickedTile) => {
  return clickedTile.classList.contains("wrong-ans");
};

const gameTileClicked = (id) => {
  const clickedTile = document.getElementById(id);
  if (clickedTile.textContent !== "" && !wrongAns(clickedTile)) {
    return;
  }
  const rowColmOfClicked = id.split("-");
  if (isValid(rowColmOfClicked[0] - 1, rowColmOfClicked[1] - 1)) {
    clickedTile.classList.remove("wrong-ans");
  } else if (!isValid(rowColmOfClicked[0] - 1, rowColmOfClicked[1] - 1)) {
    clickedTile.classList.add("wrong-ans");
  }
  clickedTile.textContent = active;
};

export default gameTileClicked;
