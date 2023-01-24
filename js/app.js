//Menú colapsado para versiones móvil
var theToggle = document.getElementById('toggle');


// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

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
  


 