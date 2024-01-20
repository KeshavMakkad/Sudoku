import newGame, { removeKEle } from "./js/gameLogic.js";
import { NUM_ROWS } from "./js/constants.js";
import { generateBoard } from "./js/generateGameBoard.js";

generateBoard();

let active = 1;

let gameBoard;

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

  const active = document.getElementById("1");
  active.classList.add("active");
};

const numberClicked = (selected) => {
  const activeNumber = document.getElementById(active);
  const selectedNumber = document.getElementById(selected);
  activeNumber.classList.remove("active");
  selectedNumber.classList.add("active");
  active = selected;
};

const isValid = (row, colm) => {
  return gameBoard[row][colm] == active ? true : false;
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
  if (
    !isValid(rowColmOfClicked[0] - 1, rowColmOfClicked[1] - 1) &&
    !wrongAns(clickedTile)
  )
    clickedTile.classList.add("wrong-ans");
  else if (wrongAns(clickedTile)) clickedTile.classList.remove("wrong-ans");
  clickedTile.textContent = active;
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

createNewGame();