
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
          mp3: "resources/podcast8/Un pintor, un barbero y un bigote.mp3"
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
  const nextButton = document.querySelector(".jp-nextPodcast");
  nextButton.addEventListener('click', ()=>window.location.href = nextButton.href);
  const prevButton = document.querySelector(".jp-pastPodcast");
  prevButton.addEventListener('click', ()=>window.location.href = prevButton.href);



  //imagen que se hace grande al hacer click
  const modal = document.querySelector('.modal');
  const previews = document.querySelectorAll('.imagenes img');
  const full = document.querySelector('.full-image');

  previews.forEach((preview) => {
    preview.addEventListener('click', () => {
      modal.classList.add('open');
      full.classList.add('open');
        const originalSrc = preview.getAttribute('src');
        full.src = originalSrc;
    });
  });
  modal.addEventListener('click', (e) =>{
   // if(e.target.classList.contains('modal')){
      modal.classList.remove('open');
      //full.classList.remove("open");
   // }
  });

