const botones = fomulario.querySelectorAll("input")

$(document).ready(function() {
  var numeros = new Array(20)

  for (var i = 1; i < botones.length; i++) {
    $(botones[i]).hide()
  }

  $(botones[botones.length - 1]).click(function() {
    escribir(numeros)
  });

  $(botones[0]).click(function() {
    for (var i = 0; i < numeros.length; i++) {
      numeros[i] = Math.round(getRandomArbitrary(1, 100))
    }
    escribir(numeros)
    for (var i = 1; i < botones.length; i++) {
      $(botones[i]).show("slow")
    }
  });

  $(botones[1]).click(function() {
    let numerosImpares = new Array()
    numeros.forEach(item => {
      if (item % 2 == 0) {
        numerosImpares.push(item)
      }
    });
    escribir(numerosImpares)
  });

  $(botones[2]).click(function() {
    let numerosPares = new Array()
    numeros.forEach(item => {
      if (item % 2 != 0) {
        numerosPares.push(item)
      }
    });
    escribir(numerosPares)
  });

  $(botones[3]).click(function() {
    let numerosPrimos = new Array()
    numeros.forEach(item => {
      let primo = true;
      for (var i = 2; i < item; i++) {
        if (item % i == 0 || item == 1) {
          primo = false;
          break;
        }
      }
      if (primo) {
        numerosPrimos.push(item)
      }
    });
    escribir(numerosPrimos)
  });

  $(botones[4]).click(function() {
    let numerosCompuestos = new Array()
    numeros.forEach(item => {
      let primo = true;
      for (var i = 2; i < item; i++) {
        if (item % i == 0) {
          primo = false;
          break;
        }
      }
      if (!primo) {
        numerosCompuestos.push(item)
      }
    });
    escribir(numerosCompuestos)
  });
});

function escribir(n) {
  $("#contenedor").prop('value', n.join(" - "))
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
