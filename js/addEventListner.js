import createNewGame from "./createNewGame.js";
import gameTileClicked from "./gameTileClicked.js";
import numberClicked from "./numberTileClicked.js";

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

export default addEventListeners