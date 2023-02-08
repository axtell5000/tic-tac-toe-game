function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverEle.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>';
  gameOverEle.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGane() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter both players name please");
    return;
  }

  resetGameStatus();

  activePlayerNameEle.textContent = players[activePlayer].name;
  gameAreaEle.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameEle.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  // to make it work with the array, from data attribue to the array
  const selectedColumn = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0 || gameIsOver) {
    alert("Please select an empty field");
    return;
  }

  event.target.textContent = players[activePlayer].symbol; // players[0]
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // Checking the rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      (gameData[i][0] === gameData[i][1]) === 1 &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // Checking the columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Checking the diagonal values: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Checking the diagonal values: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverEle.style.display = "block";

  if (winnerId > 0) {
    const winnerNmae = players[winnerId - 1].name;
    gameOverEle.firstElementChild.firstElementChild.textContent = winnerNmae;
  } else {
    gameOverEle.firstElementChild.textContent = "It is a draw!";
  }
}
