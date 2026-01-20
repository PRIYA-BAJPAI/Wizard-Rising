
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

//slider
//logic 1
// const slides = document.querySelector(".slides");
// const totalSlides = document.querySelectorAll(".slide").length;
// let index = 0;

// document.querySelector(".next").onclick = () => {
//   index = (index + 1) % totalSlides;
//   slides.style.transform = `translateX(-${index * 100}%)`;
// };

// document.querySelector(".prev").onclick = () => {
//   index = (index - 1 + totalSlides) % totalSlides;
//   slides.style.transform = `translateX(-${index * 100}%)`;
// };

//slider
//logic 2
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalSlides = slideItems.length;

function updateSlider() {
  slides.style.transform = `translateX(-${index * 60}vw )`;

  // hide / show buttons
  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === totalSlides - 1 ? "none" : "block";
}

nextBtn.onclick = () => {
  if (index < totalSlides - 1) {
    index++;
    updateSlider();
  }
};

prevBtn.onclick = () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
};

// initialize
updateSlider();

