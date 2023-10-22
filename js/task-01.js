//task1
// Primul pas:selectez ul cu id ul "categories"
const totalNumbers = document.querySelector("#categories");

// verific dacă elementul ul a fost găsit
if (totalNumbers) {
  // apoi selectez toate elementele li cu clasa "item"
  const tehnology = totalNumbers.querySelectorAll("li.item");

  /* iar la fina pun 2 conditii daca gaseste eleem li sa le innumere sa-si spuna in consola
   cate sunt,iar daca nu le gaseste afiseaza un mesaj cu `negasit`*/
  console.log("Number of categories: " + tehnology.length);
} else {
  console.log('Nu s-a găsit un element <ul> cu ID-ul "categories".');
}

//task2
//iterez fiecare li in parte
// Primul pas:selectez ul cu id ul "categories"
const categoryList = document.querySelector("#categories");

// verific dacă elementul ul a fost găsit
if (categoryList) {
  // apoi selectez toate elementele li cu clasa "item"
  const tehnology = categoryList.querySelectorAll("li.item");
  for (let i = 0; i < tehnology.length; i++) {
    const category = tehnology[i];
    //selectez h2
    const title = category.querySelector("h2");
    /*!!greseala facuta:    const subItems = document.querySelector("ul li")
    trebuie sa punem querySelectorAll pentru a putea selecta ul plus li */
    const subItems = category.querySelectorAll("ul li");
    //afisez titlul categoriei cu textContent
    console.log("Category :" + title.textContent);
    //si nr total li din fiecare h2
    console.log("Elements:" + subItems.length);
  }
} else {
  console.log('Nu s-a găsit un element <ul> cu ID-ul "categories".');
}
