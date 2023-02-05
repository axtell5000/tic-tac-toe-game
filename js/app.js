// Okay to do this in one file, the rest of the app will have access to it
let editedPlayer = 0;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const playerConfigOverlayEle = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formEle = document.querySelector("form");
const errorsOutput = document.getElementById("config-errors");

const editPlayerOneBtnEle = document.getElementById("edit-player1-details");
const editPlayerTwoBtnEle = document.getElementById("edit-player2-details");
const cancelConfigBtn = document.getElementById("cancel-config-btn");

editPlayerOneBtnEle.addEventListener("click", openPlayerConfig);
editPlayerTwoBtnEle.addEventListener("click", openPlayerConfig);
cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formEle.addEventListener("submit", savePlayerConfig);
