function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
//adauga un ascultator de evenimente la butonul destroy si create care va fi declansat cand apasam butonul click
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const numBoxesInput = document.getElementById("numBoxes");
  const numBoxes = numBoxesInput.value;

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
  }
}
