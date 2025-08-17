let fillLevel = 100; // inicia vacío (y=100)
let filling = false;
let interval;
const fillRect = document.getElementById("fillRect");
const heartSvg = document.getElementById("heartSvg");

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
      fillLevel -= fillStep;
      if (fillLevel < 0) fillLevel = 0;
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
