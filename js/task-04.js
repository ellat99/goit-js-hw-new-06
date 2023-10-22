//Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const valueSpan = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');

//adaug event listener pt butonul de incrementare
decrementButton.addEventListener("click", () => {
  counterValue -= 1; //scade cu minus 1 valoarea
  updateCounter(); //refesh interfata
});
incrementButton.addEventListener("click", () => {
  counterValue = counterValue + 1;
  updateCounter();
});
function updateCounter() {
  valueSpan.textContent = counterValue;
}
