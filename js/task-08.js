const form = document.querySelector(".login-form");
form.addEventListener("submit", handleFormSubmit);
/** adaugă un ascultător de evenimente formularului cu clasa "login-form" pentru evenimentul "submit".
 * Evenimentul "submit" are loc atunci când utilizatorul apasă butonul "Login" sau apasă tasta Enter
 *  într-un câmp de intrare. */
function handleFormSubmit(event) {
  event.preventDefault();
  // folosim form.elements.email,form.elements.password pt a accesa valorile introduse in campurile email si parola
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    //daca e gol ,alerta
    alert("Toate câmpurile trebuie completate!");
  } else {
    const formData = {
      //daca ambele campuri sunt completTE ,CREAM UN OBIECT FORMdATA care contine email si parola
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData); //le afisam in consola
    form.reset(); //dam refresh la campuri
  }
}
