

//dropdown de la barra de navegación EKC23
const dropdown = document.getElementById("dropdown");
const options = document.getElementById("dropdown-options");

dropdown.addEventListener("mouseover", function() {
  options.style.display = "block";
});

dropdown.addEventListener("mouseout", function() {
  options.style.display = "none";
});

//Carroussel de página principal
const itemsCarroussel = document.querySelector(".contenido-carroussel");
const slide = document.querySelectorAll("#contenido1, #contenido2, #contenido3");
const botonIzquierdo = document.getElementById("flecha-izquierda");
const botonDerecho = document.getElementById("flecha-derecha");
let currentSlide = 0;

botonDerecho.addEventListener("click", (event) => {

    const spacing = slide[1].offsetLeft - slide[0].offsetLeft;
    currentSlide = (currentSlide +1) % slide.length;
   
    itemsCarroussel.scrollLeft = currentSlide * spacing;
    
  });
  botonIzquierdo.addEventListener("click", () => {

    const spacing = slide[1].offsetLeft - slide[0].offsetLeft;
    currentSlide = (currentSlide - 1 + slide.length) % slide.length; 
    currentSlide = currentSlide < 0 ? slide.length - 1 : currentSlide;
  
    itemsCarroussel.scrollLeft = currentSlide * spacing;
  
  });
  


 