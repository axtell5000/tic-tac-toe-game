// Okay to do this in one file, the rest of the app will have access to it
// used to help track who won the game
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Various flagers and counters
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

// Selecting DOM elements to work with in the future
const playerConfigOverlayEle = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formEle = document.querySelector("form");
const errorsOutput = document.getElementById("config-errors");
const gameAreaEle = document.getElementById("active-game");
const activePlayerNameEle = document.getElementById("active-player-name");
const gameOverEle = document.getElementById("game-over");
const gameBoardElement = document.getElementById("game-board");

const editPlayerOneBtnEle = document.getElementById("edit-player1-details");
const editPlayerTwoBtnEle = document.getElementById("edit-player2-details");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const startGameBtnEle = document.getElementById("start-new-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayerOneBtnEle.addEventListener("click", openPlayerConfig);
editPlayerTwoBtnEle.addEventListener("click", openPlayerConfig);
cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formEle.addEventListener("submit", savePlayerConfig);
startGameBtnEle.addEventListener("click", startNewGane);

for (const gameFiledElement of gameFieldElements) {
  gameFiledElement.addEventListener("click", selectGameField);
}
