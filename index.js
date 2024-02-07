import { generateBoard } from "./js/generateGameBoard.js";
import addEventListeners from "./js/addEventListner.js";

const gameDone = document.querySelector(".game-done");
gameDone.style.display = "none";

generateBoard();
addEventListeners();
