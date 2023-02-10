

//dropdown de la barra de navegación EKC23
const dropdown = document.getElementById("dropdown");
const options = document.getElementById("dropdown-options");

dropdown.addEventListener("mouseover", function() {
  options.style.display = "block";
});

dropdown.addEventListener("mouseout", function() {
  options.style.display = "none";
});

//Podcast carroussel
const itemsCarousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const botonIzq = document.getElementById("flecha-izquierda");
const botonDer = document.getElementById("flecha-derecha");
let currentCard = 0;

botonDer.onclick = ((event) => {

    const spacing = cards[1].offsetLeft - cards[0].offsetLeft;
    currentCard = (currentCard +1) % cards.length;
   
    itemsCarousel.scrollLeft = currentCard * spacing;
    
  });
  botonIzq.onclick = (() => {

    const spacing = cards[1].offsetLeft - cards[0].offsetLeft;
    currentCard = (currentCard - 1 + cards.length) % cards.length; 
    currentCard = currentCard < 0 ? cards.length - 1 : currentCard;
  
    itemsCarousel.scrollLeft = currentCard * spacing;
  
  });

  
