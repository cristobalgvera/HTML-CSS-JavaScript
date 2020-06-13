function testing() {
  var palabras = limpiador(entradaTexto.value.split(" "))
  var caracteres = limpiador(entradaTexto.value.split(""))

  cantidadPalabras.value = palabras.length
  cantidadLetras.value = caracteres.length
  if (palabras.length > 0) {
    primeraPalabra.value = palabras[0]
    últimaPalabra.value = palabras[palabras.length - 1]
  } else {
    primeraPalabra.value = ""
    últimaPalabra.value = ""
  }
  ordenInverso.value = entradaTexto.value.split("").reverse().join("")
  ordenInversoSinEspacios.value = caracteres.reverse().join("")
}

function limpiador(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "" || array[i] == " ") {
      array.splice(i, 1)
      i--
    }
  }
  return array
}
