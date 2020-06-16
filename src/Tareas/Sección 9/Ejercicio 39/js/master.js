$(document).ready(function() {
  $("#vld").click(function comparar() {
    let fch1 = new Date($("#fecha1").prop("value")).getTime()
    let fch2 = new Date($("#fecha2").prop("value")).getTime()
    // alert(fch1 + " " + fch2)
    let resultado
    let mayor
    if (fch1 >= fch2) {
      if (fch1 == fch2) {
        resultado = "Las fechas son iguales"
      } else {
        resultado = "La primera fecha es mayor que la segunda"
      }
      mayor = fch1
    } else {
      mayor = fch2
      resultado = "La segunda fecha es mayor que la primera"
    }
    let diferencia = Math.abs(fch1 - fch2)/(1000*60*60*24)
    resultado += "\n\nLa diferencia entre las fechas es de " + diferencia + " días"
    let anio = new Date('2020-12-31').getTime()
    diferencia = Math.abs(mayor - anio)/(1000*60*60*24)
    resultado += "\n\nLa diferencia entre la mayor fecha y el final del año es de " + diferencia + " días"
    $("#comparador").prop("value", resultado)
  });
});
