// ILUSTRACION Y ANIMACION TECLAS DE PIANO

const teclas = document.querySelectorAll(".tecla"),
  note = document.querySelector(".oprimiendo"),
  pista = document.querySelectorAll(".pista");


//obtener tecla presionada, generar animacion y mostrar nota musical
function oprimeTecla(e) {
  const tecla = document.querySelector(`.tecla[data-tecla="${e.keyCode}"]`);

  if (!tecla) return;

  const keyNote = tecla.getAttribute("data-nota");

  tecla.classList.add("oprime");
  note.innerHTML = keyNote;
}

// remueve el loop de animaccion en teclas
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("oprime");
}

//anima, estiliza nota musical presionada
function muestraPista(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

//genera loops y events listeners
pista.forEach(muestraPista);

teclas.forEach(tecla => tecla.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", oprimeTecla);

// SONIDOS SINUSOIDALES TECLAS DE PIANO

var context= new AudioContext();
 
function Sonido(frecuencia){
        var oscilacion = context.createOscillator();
        aumento=context.createGain();
        oscilacion.connect(aumento);
        oscilacion.type="sine";
        oscilacion.frequency.value=frecuencia;
        aumento.connect(context.destination);
        oscilacion.start(0);
        aumento.gain.exponentialRampToValueAtTime(0.00001,context.currentTime + .5);
    }