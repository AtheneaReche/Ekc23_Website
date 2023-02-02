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
  

  const forward30 = ()=>{
    // Fast forwards the audio file by 30 seconds. function forwardAudio() {// Check for audio element support.
    if (window.HTMLAudioElement) {
      try {
        var oAudio = document.querySelector("audio");
        oAudio.currentTime += 30.0;
      }
      catch (e) {
        // Fail silently but show in F12 developer tools console
        if(window.console && console.error("Error:" + e));
      }
    }
  }
  
  const backward30 = ()=>{
    // Fast forwards the audio file by 30 seconds. function forwardAudio() {// Check for audio element support.
    if (window.HTMLAudioElement) {
      try {
        var oAudio = document.querySelector("audio");
        oAudio.currentTime -= 30.0;
      }
      catch (e) {
        // Fail silently but show in F12 developer tools console
        if(window.console && console.error("Error:" + e));
      }
    }
  }
  
  const forwardButton = document.querySelector(".jp-30sPlus");
  forwardButton.addEventListener('click', forward30);
  const backwardButton = document.querySelector(".jp-30sMinus");
  backwardButton.addEventListener('click', backward30);



  //imagen que se hace grande al hacer click
  const modal = document.querySelector('.modal');
  const previews = document.querySelectorAll('.imagenes img');
  const full = document.querySelector('.full-image');

  previews.forEach((preview) => {
    preview.addEventListener('click', () => {
      modal.classList.add('open');
      full.classList.add('open');
    });
  });
  modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
      modal.classList.remove('open');
    }
  });

