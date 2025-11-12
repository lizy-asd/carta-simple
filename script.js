const body = document.body;
const envelope = document.getElementById("cardToggle");
const letterCard = document.getElementById("letterCard");
const sky = document.querySelector(".sky");
let isOpen = false;

// Abrir/cerrar al tocar el sobre o la carta
function toggleCard() {
  isOpen = !isOpen;
  body.classList.toggle("card-open", isOpen);

  if (isOpen) {
    lanzarCorazones();
  }
}

envelope.addEventListener("click", toggleCard);
letterCard.addEventListener("click", toggleCard);

// ESTRELLAS CAYENDO ✨
function crearEstrella() {
  const star = document.createElement("div");
  star.classList.add("star");

  const sizeRand = Math.random();
  if (sizeRand < 0.33) {
    star.classList.add("star--small");
  } else if (sizeRand > 0.66) {
    star.classList.add("star--big");
  }

  star.textContent = Math.random() > 0.5 ? "★" : "✦";

  const posX = Math.random() * 100;
  const duracion = 5 + Math.random() * 5;

  star.style.left = posX + "vw";
  star.style.animationDuration = duracion + "s";

  sky.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, duracion * 1000 + 500);
}

let estrellasActuales = 0;
const MAX_ESTRELLAS = 30;

setInterval(() => {
  if (estrellasActuales < MAX_ESTRELLAS) {
    crearEstrella();
    estrellasActuales++;
    setTimeout(() => {
      estrellasActuales--;
    }, 10000);
  }
}, 350);

// CORAZONES AL ABRIR 💖
function lanzarCorazones() {
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";

    const offset = -20 + Math.random() * 40;
    heart.style.left = 50 + offset + "%";
    heart.style.animationDelay = i * 0.2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2200);
  }
}
