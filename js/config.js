function openPlayerConfig(event) {
  editedPlayer = parseInt(event.target.dataset.playerid); // targetting data item called playerid
  playerConfigOverlayEle.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayEle.style.display = "none";
  backdropElement.style.display = "none";
  formEle.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
  formEle.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); // form api, which constructs an object like item out of the fields. Name attribute is key
  const enteredPlayerName = formData.get("playername").trim(); // getting the value using the name attribute

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutput.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player" + editedPlayer + "-data"
  ); // getting player based on data item then get by ID
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
