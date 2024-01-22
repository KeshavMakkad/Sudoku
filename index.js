import { generateBoard } from "./js/generateGameBoard.js";
import createNewGame from "./js/createNewGame.js";
import gameTileClicked from "./js/gameTileClicked.js";

generateBoard();

const activeNumber = document.getElementById("1");
activeNumber.classList.add("active");
const gameBoard = createNewGame();

export let active = 1;

const numberClicked = (selected) => {
  const activeNumber = document.getElementById(active);
  const selectedNumber = document.getElementById(selected);
  activeNumber.classList.remove("active");
  selectedNumber.classList.add("active");
  active = selected;
};

const addEventListeners = () => {
  const newGameBtn = document.querySelector("#new-game-btn");
  newGameBtn.addEventListener("click", createNewGame);

  const numberTiles = document.querySelectorAll(".numbers-tile");
  for (let i = 0; i < numberTiles.length; i++) {
    numberTiles[i].addEventListener("click", () => {
      numberClicked(i + 1);
    });
  }

  const gameTiles = document.querySelectorAll(".game-board-tile");
  // console.log(gameTiles)
  for (let i = 0; i < gameTiles.length; i++) {
    gameTiles[i].addEventListener("click", () => {
      const getIdOfClicked = gameTiles[i].id;
      gameTileClicked(getIdOfClicked);
    });
  }
};



addEventListeners();
