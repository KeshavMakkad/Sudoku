import { generateBoard } from "/generateGameBoard.js";
import addEventListeners from "/addEventListner.js";

const gameDone = document.querySelector(".game-done");
gameDone.style.display = "none";

generateBoard();
addEventListeners();
