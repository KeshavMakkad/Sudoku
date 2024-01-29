import { gameBoard } from "./createNewGame.js";
import { BLANK_CELL } from "./constants.js";

export let prevClickedTile;
export var count = 0;

export const resetCount = () => (count = 0);
let idOfTheClicked;
let clickedRow;
let clickedColm;

export const isValid = (id) => {
  // console.log(idOfTheClicked);
  let clickedRowColm = idOfTheClicked.split("-");
  clickedRow = clickedRowColm[0];
  clickedColm = clickedRowColm[1];
  if (id == gameBoard[clickedRow - 1][clickedColm - 1]) return true;
  console.log(gameBoard[clickedRow - 1][clickedColm - 1]);
  return false;
};

export const gameTileClicked = (id) => {
  const clickedTile = document.getElementById(id);
  if (prevClickedTile !== undefined) {
    if (
      clickedTile.textContent !== BLANK_CELL &&
      !clickedTile.classList.contains("wrong-ans")
    )
      return;
    prevClickedTile.classList.remove("active");
  }
  clickedTile.classList.add("active");
  idOfTheClicked = id;
  if (clickedTile.classList.contains("wrong-ans"))
    clickedTile.classList.add("wrong-active-ans");
  prevClickedTile = clickedTile;
};

export const numberTileClicked = (id) => {
  prevClickedTile.textContent = id;
  if (!isValid(id)) {
    prevClickedTile.classList.add("wrong-ans");
    prevClickedTile.classList.add("wrong-active-ans");
  } else {
    if (prevClickedTile.classList.contains("wrong-ans"))
      prevClickedTile.classList.remove("wrong-active-ans");
    prevClickedTile.classList.remove("wrong-ans");
    prevClickedTile.classList.add("user-input-correct-ans");
    prevClickedTile.classList.remove("active");
    prevClickedTile = undefined;
    count++;
  }
};
