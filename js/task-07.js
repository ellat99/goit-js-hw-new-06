const inputSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
inputSize.addEventListener("input", (e) => {
  textSpan.style.fontSize = `${e.target.value}px`;
});
