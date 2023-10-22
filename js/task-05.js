const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (e) => {
  textOutput.textContent = e.currentTarget.value;
});
