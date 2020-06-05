function mostrarFecha() {
  var fecha = document.getElementById("fecha");
  var today = new Date();
  var day = showDay(today.getDay());
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  today = dd + '/' + mm + '/' + yyyy;
  fecha.innerHTML = `
  Hoy es ${day}, ${dd} de ${mm} de ${yyyy}, <br>
  y son las ${hours} horas, ${minutes} minutos <br>
  con ${seconds} segundos.
  `;

  var left = document.getElementById("tiemporestante");
  left.innerHTML = `
  Quedan ${12-mm} meses con ${30-dd} <br>
  días, ${24-hours} horas con ${60-minutes} <br>
  minutos y ${60-seconds} segundos para <br>
  que finalice el año.
  `;
}

function showDay(day) {
  var sDay;
  switch (day) {
    case 1:
      sDay = "lunes";
      break;
    case 2:
      sDay = "martes";
      break;
    case 3:
      sDay = "miércoles";
      break;
    case 4:
      sDay = "jueves";
      break;
    case 5:
      sDay = "viernes";
      break;
    case 6:
      sDay = "sábado";
      break;
    case 7:
      sDay = "domingo";
      break;
    default:
      day = "ERROR";

  }
  return sDay;
}
