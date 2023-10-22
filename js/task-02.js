const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//selectam elem ul din html (unde vrem sa ne punem intregientele)
const ingredientsList = document.querySelector("#ingredients");
//verificam daca ul adica ingredients a fost gasit
if (ingredientsList) {
  //creez li pentru fiecare ingredient, le adaug in lista
  ingredients.forEach((ingrediente) => {
    //cream li urile pentru intredientele din matricea de mai sus
    const li = document.createElement("li");
    //le punem denumirea potatoes...
    li.textContent = ingrediente;
    //adaugam clasa pentru li uri
    li.classList.add("item");
    /*Astfel, fiecare element <li> creat pentru fiecare ingredient este adăugat la sfârșitul
     listei de ingrediente, transformând efectiv matricea de ingrediente într-o listă HTML vizibilă în document.*/
    ingredientsList.appendChild(li);
  });
} else {
  console.log("nu s-a gasit nimic");
}
