
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
