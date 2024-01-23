import { generateBoard } from "./js/generateGameBoard.js";
import addEventListeners from "./js/addEventListner.js";
import createNewGame from "./js/createNewGame.js";

generateBoard();

const activeNumber = document.getElementById("1");
activeNumber.classList.add("active");

createNewGame();
addEventListeners();
