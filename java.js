
const music = document.getElementById("music");
const btn = document.getElementById("mute-unmute");

let started = false;

btn.addEventListener("click", () => {

  // First click → start music
  if (!started) {
    music.volume = 0.4;     // background level
    music.muted = false;
    music.play().catch(err => console.log("Play blocked:", err));
    started = true;
    btn.textContent = "|| Music";
    return;
  }

  // Toggle mute after started
  if (music.muted) {
    music.muted = false;
    btn.textContent = "|| Music";
  } else {
    music.muted = true;
    btn.textContent = "♪ Music";
  }
});


//menu icon
function toggle(event){
  event.stopPropagation(); //stop click bubbling - The click happens first on the element you clicked.Then it moves upward to its parent.Then to grandparent
  document.getElementById("nav").classList.toggle("show")
  document.getElementById("bg").classListtoggle("menu-open")
  }

document.body.onclick=function(){
  document.getElementById("nav").classList.remove("show");
  document.getElementById("bg").classList.remove("menu-open");
}

