const teclas = document.querySelectorAll(".tecla"),
  note = document.querySelector(".oprimiendo"),
  pista = document.querySelectorAll(".pista");

function oprimeTecla(e) {
  const tecla = document.querySelector(`.tecla[data-tecla="${e.keyCode}"]`);

  if (!tecla) return;

  const keyNote = tecla.getAttribute("data-nota");

  tecla.classList.add("oprime");
  note.innerHTML = keyNote;
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("oprime");
}

function muestraPista(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

pista.forEach(muestraPista);

teclas.forEach(tecla => tecla.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", oprimeTecla);

console.log(oprime);