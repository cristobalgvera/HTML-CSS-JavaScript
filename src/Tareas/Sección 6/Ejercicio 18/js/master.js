function main() {
  var number = document.getElementById("number").value;
  var mensaje = document.getElementById("mensaje");
  if (number == "") {
    mensaje.innerHTML = "No existe un valor en la caja de texto";
  } else if (isNaN(number)) {
    alert("Debe ser un número");
  } else {
    mensaje.innerHTML = suma(number);
  }
}

function suma(number) {
  var suma = 0;
  for (var i = 1; i <= number; i++) {
    suma += i;
  }
  return suma;
}
