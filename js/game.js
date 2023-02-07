function startNewGane() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter both players name please");
    return;
  }
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
  const selectedColumn = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  event.target.textContent = players[activePlayer].symbol; // players[0]
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  switchPlayer();
}
