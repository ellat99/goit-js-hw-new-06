const blurInput = document.querySelector("#validation-input");
/**Aici se adaugă un event listener pentru evenimentul "blur" asupra elementului de input. 
 * 
 Evenimentul "blur" are loc atunci când focusul părăsește elementul de input, adică când utilizatorul 
 se deplasează la altă parte a paginii sau face clic în altă parte a paginii după ce a introdus text în input. */
blurInput.addEventListener("blur", () => {
  /*NE AMINTIM!! getAttribute este  este o metodă sau funcție folosită pentru a obține valoarea unui atribut 
  al unui element HTML,adica aici afiseaza valoarea lui data-length aidca 6 */
  const expectedLength = parseInt(blurInput.getAttribute("data-length"));
  const inputValue = blurInput.value;
  if (inputValue.length === expectedLength) {
    blurInput.classList.remove("invalid");
    blurInput.classList.add("valid");
  } else {
    blurInput.classList.remove("valid");
    blurInput.classList.add("invalid");
  }
});
