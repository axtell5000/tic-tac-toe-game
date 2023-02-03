const playerConfigOverlayEle = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const editPlayerOneBtnEle = document.getElementById("edit-player1-details");
const editPlayerTwoBtnEle = document.getElementById("edit-player2-details");
const cancelConfigBtn = document.getElementById("cancel-config-btn");

editPlayerOneBtnEle.addEventListener("click", openPlayerConfig);
editPlayerTwoBtnEle.addEventListener("click", openPlayerConfig);
cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
