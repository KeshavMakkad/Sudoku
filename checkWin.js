import { NUM_SQUARES } from "/constants.js";
import {
  getCheckWinInLocalStorage,
  setCheckWinInLocalStorage,
} from "/localStorage.js";

let correctSquaresSelected = 40;

setCheckWinInLocalStorage(correctSquaresSelected);

let squaresSelected = getCheckWinInLocalStorage();
correctSquaresSelected = squaresSelected.correctSquaresSelected;

export const updateCorrectSquares = () => {
  correctSquaresSelected++;
  console.log(correctSquaresSelected);
  setCheckWinInLocalStorage(correctSquaresSelected);
};

export const checkIfWon = () => {
  if (correctSquaresSelected == NUM_SQUARES) gameCompleted();
};

const gameCompleted = () => {
  const gameContainer = document.querySelector(".game-container");
  gameContainer.style.display = "none";

  const gameDone = document.querySelector(".game-done");
  gameDone.style.display = "block";
};
