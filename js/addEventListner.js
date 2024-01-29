import createNewGame from "./createNewGame.js";
import {
  gameTileClicked,
  prevClickedTile,
  numberTileClicked,
  count,
} from "./gameFunction.js";

const addEventListeners = () => {
  const newGameBtn = document.querySelector("#new-game-btn");
  newGameBtn.addEventListener("click", createNewGame);

  const numberTiles = document.querySelectorAll(".numbers-tile");

  for (let i = 0; i < numberTiles.length; i++) {
    numberTiles[i].addEventListener("click", () => {
      if (prevClickedTile != undefined) {
        numberTileClicked(i + 1);
      } else if (count == 0) alert("Please select a square first");
      else alert("You already got the correct answer");
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

export default addEventListeners;
