testArea.value = "PASA EL PUNTERO POR AQUÍ";
var x;
var y;
var contador = 0;

function mouseOn(e) {
  x = e.clientX;
  y = e.clientY;
  posicion.innerHTML = `X: ${x}<br>Y: ${y}`;
}

function mouseOut() {
  posicion.innerHTML = `X:<br>Y:`;
}

function mouseClick() {
  contador++;
  var registro = document.createElement("p")
  registro.innerHTML = `<b>${contador}:</b>   X: ${x} | Y: ${y}`;
  registrados.appendChild(registro);
}

function reiniciar() {
  var registros = registrados.querySelectorAll("p")
  registros.forEach(r => {
    r.remove();
  });
  contador = 0;
  testArea.value = "PASA EL PUNTERO POR AQUÍ"
}
