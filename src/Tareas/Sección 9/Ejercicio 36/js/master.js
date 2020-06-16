var contador = 0
var datos = ["Nombre", "Marca", "Stock", "Estado", "Color"]

$(document).ready(function() {
  for (var i = 1; i <= 99; i++) {
    contador++
    var producto = document.createElement("tr")
    for (var j = 0; j < datos.length; j++) {
      let caracteristica = document.createElement("td")
      // caracteristica.innerHTML = `${datos[j] + " " + (i+1)}`;
      $(caracteristica).prop('innerHTML', datos[j] + " " + i);
      producto.appendChild(caracteristica)
    }
    $("#example tbody").append(producto)
  }
  $('#example').DataTable({});
});
