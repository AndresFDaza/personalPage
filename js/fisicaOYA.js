// ---------ILUSTRACION Y ANIMACION TECLAS DE PIANO

const teclas = document.querySelectorAll(".tecla"),
  note = document.querySelector(".oprimiendo"),
  pista = document.querySelectorAll(".pista");


//obtener tecla presionada, generar animacion y mostrar nota musical
function oprimeTecla(e) {
  const tecla = document.querySelector(`.tecla[data-tecla="${e.keyCode}"]`);
  if (!tecla) return;

  const notaTeclado = tecla.getAttribute("data-nota");
  const teclaTeclado = tecla.getAttribute("data-tecla");

  tecla.classList.add("oprime");

  if(teclaTeclado == "65"){
    Sonido(261.626);
  }

  else if(teclaTeclado == "87"){
    Sonido(277.183);
  }
  else if(teclaTeclado == "83"){
    Sonido(293.665);
  }
  else if(teclaTeclado == "69"){
    Sonido(311.127);
  }
  else if(teclaTeclado == "68"){
    Sonido(329.628);
  }
  else if(teclaTeclado == "70"){
    Sonido(349.228);
  }
  else if(teclaTeclado == "84"){
    Sonido(369.994);
  }
  else if(teclaTeclado == "71"){
    Sonido(391.995);
  }
  else if(teclaTeclado == "89"){
    Sonido(415.305);
  }
  else if(teclaTeclado == "72"){
    Sonido(440);
  }
  else if(teclaTeclado == "85"){
    Sonido(466.164);
  }
  else if(teclaTeclado == "74"){
    Sonido(493.88);
  }
  else if(teclaTeclado == "75"){
    Sonido(523.251);
  }
  else if(teclaTeclado == "79"){
    Sonido(554.365);
  }
  else if(teclaTeclado == "76"){
    Sonido(587.33);
  }
  else if(teclaTeclado == "80"){
    Sonido(622.254);
  }
  else if(teclaTeclado == "192"){
    Sonido(659.255);
  }

  note.innerHTML = notaTeclado;
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

window.addEventListener("keydown", oprimeTecla, SonidoTeclado);

// -------------SONIDOS SINUSOIDALES TECLAS DE PIANO

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

function SonidoTeclado(e){
  const tecla = document.querySelector(`.tecla[data-tecla="${e.keyCode}"]`);
  if (!tecla) return;

  const teclaTeclado = tecla.getAttribute("data-tecla");
  if(teclaTeclado == "65"){
    Sonido(261.626);
  }
  else if(teclaTeclado == "87"){
    Sonido(277.183);
  }
  else if(teclaTeclado == "83"){
    Sonido(293.665);
  }
  else if(teclaTeclado == "69"){
    Sonido(311.127);
  }
  else if(teclaTeclado == "68"){
    Sonido(329.628);
  }
  else if(teclaTeclado == "70"){
    Sonido(349.228);
  }
  else if(teclaTeclado == "84"){
    Sonido(369.994);
  }
  else if(teclaTeclado == "71"){
    Sonido(391.995);
  }
  else if(teclaTeclado == "89"){
    Sonido(415.305);
  }
  else if(teclaTeclado == "72"){
    Sonido(440);
  }
  else if(teclaTeclado == "85"){
    Sonido(466.164);
  }
  else if(teclaTeclado == "74"){
    Sonido(493.88);
  }
  else if(teclaTeclado == "75"){
    Sonido(523.251);
  }
  else if(teclaTeclado == "79"){
    Sonido(554.365);
  }
  else if(teclaTeclado == "76"){
    Sonido(587.33);
  }
  else if(teclaTeclado == "80"){
    Sonido(622.254);
  }
  else if(teclaTeclado == "192"){
    Sonido(659.255);
  }
}