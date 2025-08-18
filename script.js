let fillLevel = 100; // inicia vacío (y=100)
let filling = false;
let interval;
const fillRect = document.getElementById("fillRect");
const heartSvg = document.getElementById("heartSvg");


var layerCount = 5;
var starCount = 400;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;



function updateFill() {
  fillRect.setAttribute("y", fillLevel);
  fillRect.setAttribute("height", 100 - fillLevel);
}

let isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
let fillStep = isMobile ? 1.5 : 0.5;  // en móvil sube más rápido

function startFilling() {
  filling = true;
  heartSvg.classList.add("pulse");
  setTimeout(() => heartSvg.classList.remove("pulse"), 150);

  clearInterval(interval);
  interval = setInterval(() => {
    if (filling && fillLevel > 0) {
<<<<<<< HEAD
      fillLevel -= 1.5;
=======
      fillLevel -= fillStep;
      if (fillLevel < 0) fillLevel = 0;
>>>>>>> origin/main
      updateFill();

      if (fillLevel <= 0) {
        window.location.href = "mensaje.html";
      }
    }
  }, 20);
}

// Detiene el llenado y empieza a vaciar
function stopFilling(e) {
  e.preventDefault();
  filling = false;
  clearInterval(interval);
  interval = setInterval(() => {
    if (!filling && fillLevel < 100) {
      fillLevel += 0.5;
      updateFill();
    }
  }, 20);
}

// Eventos para PC
const heartContainer = document.querySelector(".heart-container");
heartContainer.addEventListener("mousedown", startFilling);
heartContainer.addEventListener("mouseup", stopFilling);
heartContainer.addEventListener("mouseleave", stopFilling);

// Eventos para móvil
heartContainer.addEventListener("touchstart", startFilling, { passive: false });
heartContainer.addEventListener("touchend", stopFilling, { passive: false });


for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var star = document.createElement("div");
  var speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "white";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  );
}

var elem = document.querySelector(".pulse");
var animation = elem.animate(
  {
    opacity: [0.5, 1],
    transform: ["scale(0.5)", "scale(1)"]
  },
  {
    direction: "alternate",
    duration: 500,
    iterations: Infinity
  }
);