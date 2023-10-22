const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//selecez ul din html-gallery
const gallery = document.querySelector(".gallery");
//verificam daca gasim elem ul
if (gallery) {
  //cream o varibila pt stocarea continutului html ,aidca pozele
  let galleryHtml = "";
  //iteram prin matricea de imagini de mai sus si adaugam fiecare imagine in html
  images.forEach((image) => {
    galleryHtml += `<li>img src="${image.url}"" alt="${image.alt}"</li>`;
  });

  //adaugam continutul html in lista ul cu insertAdjacentHTML()
  gallery.insertAdjacentHTML("beforeend", galleryHtml);
} else {
  console.log("nu s-a gasit nimic");
}
