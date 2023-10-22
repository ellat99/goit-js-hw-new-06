function getRandomHexColor() {
  //Această funcție generează și returnează o culoare aleatorie
  return `#${Math.floor(Math.random() * 16777215) //generează un număr pseudo-aleator între 0 și 1.
    /**Math.floor() îl rotunjește la cel mai apropiat număr întreg.
16777215 este echivalentul hexazecimal al valorii RGB maxime (FFFFFF), 
care este folosită pentru a genera o culoare în format hexazecimal. */
    .toString(16)
    .padStart(6, 0)}`;
}
/**.toString(16) convertește numărul întreg într-un șir hexazecimal.
.padStart(6, '0') asigură că șirul are întotdeauna exact 6 caractere, adăugând zerouri la început dacă este necesar. */

const itemSpan = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", function () {
  //adaugă un ascultător de evenimente la butonul "Change color" care va fi declanșat atunci când butonul este apăsat.
  //Această funcție este apelată atunci când butonul "Change color" este apăsat.
  const randomColor = getRandomHexColor();
  //Generează o culoare aleatorie apelând getRandomHexColor() și o stochează în variabila randomColor.
  document.body.style.backgroundColor = randomColor;
  //Setează culoarea de fundal a întregii pagini (document.body.style.backgroundColor) cu culoarea generată aleatoriu.
  itemSpan.textContent = randomColor;
  // Actualizează textul din elementul <span class="color"> cu valoarea culorii aleatorii pentru a o afișa utilizatorului.
});
