export const getGameFromLocalStorage = () => {
  const result = {
    emptyGameBoard: JSON.parse(localStorage.getItem("emptyGameBoard")),
    gameBoard: JSON.parse(localStorage.getItem("gameBoard")),
  };
  if (result.emptyGameBoard && result.gameBoard) {
    return result;
  }
  return null;
};

export const setGameInLocalStorage = (emptyGameBoard, gameBoard) => {
  localStorage.setItem("emptyGameBoard", JSON.stringify(emptyGameBoard));
  localStorage.setItem("gameBoard", JSON.stringify(gameBoard));
};

export const setCheckWinInLocalStorage = (correctSquaresSelected) => {
  localStorage.setItem("correctAns", JSON.stringify(correctSquaresSelected));
};

export const getCheckWinInLocalStorage = () => {
  const result = {
    correctSquaresSelected: JSON.parse(localStorage.getItem("correctAns")),
  };
  if (result.correctSquaresSelected) {
    return result;
  }
  return null;
};
