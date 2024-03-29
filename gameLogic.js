import { BLANK_CELL, NUM_ROWS, SQRT_N } from "/constants.js";

const gameBoard = [];

export default function newGame() {
  creategameBoard();

  generateDiagonal();
  fillRemainingCells(0, 3);

  return gameBoard;
}

// Creates a 9x9 matrix to store the sudoku board
function creategameBoard() {
  for (let i = 0; i < NUM_ROWS; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < NUM_ROWS; j++) {
      gameBoard[i][j] = 0;
    }
  }
}

function generateDiagonal() {
  // Generates the three 3x3 diagonal boxes
  for (let i = 0; i < NUM_ROWS; i += SQRT_N) fillSmallGrid(i, i);
}

// Generates a random number from 1 to num;
function generateRandom(num) {
  return Math.floor(Math.random() * num + 1);
}

// fills Each and every tile with an unused number generated by the above function.
function fillSmallGrid(row, colm) {
  for (let i = row; i < row + SQRT_N; i++) {
    for (let j = colm; j < colm + SQRT_N; j++) {
      let numberAtIndex = generateRandom(NUM_ROWS);
      while (usedInBox(row, colm, numberAtIndex)) {
        numberAtIndex = generateRandom(NUM_ROWS);
      }
      gameBoard[i][j] = numberAtIndex;
    }
  }
}

// Checks if the number to be put in each cell to fill the small grid is valid or not.
function usedInBox(startRow, startColm, num) {
  for (let i = 0; i < SQRT_N; i++) {
    for (let j = 0; j < SQRT_N; j++) {
      if (gameBoard[startRow + i][startColm + j] === num) {
        return true;
      }
    }
  }
  return false;
}

function usedInRow(row, num) {
  for (let j = 0; j < NUM_ROWS; j++) if (gameBoard[row][j] == num) return true;
  return false;
}

function usedInColm(colm, num) {
  for (let i = 0; i < NUM_ROWS; i++) if (gameBoard[i][colm] == num) return true;
  return false;
}

function isPlaceable(row, colm, num) {
  return (
    !usedInRow(row, num) &&
    !usedInColm(colm, num) &&
    !usedInBox(row - (row % SQRT_N), colm - (colm % SQRT_N), num)
  );
}

function fillRemainingCells(i, j) {
  if (i === NUM_ROWS - 1 && j === NUM_ROWS) {
    return true; // Finished filling the board
  }

  if (j >= NUM_ROWS) {
    i = i + 1;
    j = 0;
  }

  if (i < SQRT_N) {
    if (j < SQRT_N) j = SQRT_N;
  } else if (i < NUM_ROWS - SQRT_N) {
    if (j === Math.floor(i / SQRT_N) * SQRT_N) j = j + SQRT_N;
  } else {
    if (j === NUM_ROWS - SQRT_N) {
      i = i + 1;
      j = 0;
      if (i >= NUM_ROWS) return true;
    }
  }

  for (let num = 1; num <= NUM_ROWS; num++) {
    if (isPlaceable(i, j, num)) {
      gameBoard[i][j] = num;
      if (fillRemainingCells(i, j + 1)) {
        return true; // Return if the board is successfully filled
      }
      gameBoard[i][j] = 0; // Backtrack if filling the cell didn't lead to a solution
    }
  }
  return false;
}

export function removeKEle(k, gameBoard) {
  let filled = 0;
  gameBoard = JSON.parse(JSON.stringify(gameBoard));

  while (filled < k) {
    let rowIndex = generateRandom(NUM_ROWS) - 1;
    let colmIndex = generateRandom(NUM_ROWS) - 1;
    if (gameBoard[rowIndex][colmIndex]) {
      gameBoard[rowIndex][colmIndex] = BLANK_CELL;
      filled++;
    }
  }
  return gameBoard;
}
// Use HashMap In used reow , colm ,blah blah

// 55 - Hard
// 40 - medium
// 25 -easy
