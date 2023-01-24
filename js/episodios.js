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

// Reproductor audio
$(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "resources/imagenes-podcast1/DEMO EKC.mp3"
        });
      },
      swfPath: "/js",
      supplied: "mp3"
    });
  });