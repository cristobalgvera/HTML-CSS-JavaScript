// Creación del tablero de juego

var tbl = document.getElementById("focusArea");
const tam = 5;
var colorDistintoI = true;
var colorDistintoF = true;
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");

for (var i = 0; i < tam; i++) {
  var fila = document.createElement("tr");
  for (var j = 0; j < tam; j++) {
    var celda = document.createElement("td");
    with(celda.style) {
      width = "50px";
      height = "50px";
      border = "1px solid black";
      if ((Math.random() >= 0.7 || i == tam - 1) && ((colorDistintoI && j == 0) || (colorDistintoF && j == tam - 1))) {
        backgroundColor = "red";
        if (j == 0) {
          colorDistintoI = false;
        } else if (j == tam - 1) {
          colorDistintoF = false;
        }
      } else {
        backgroundColor = "green";
      }
    }
    fila.appendChild(celda);
  }
  tblBody.appendChild(fila);
}
tabla.appendChild(tblBody);
tbl.appendChild(tabla);

// Se añade evento de click a cada celda de la tabla creada

const cells = document.querySelectorAll('td');
cells.forEach(cell => {
  cell.addEventListener('click', function() {
    var pintar = false;
    var tbl = document.getElementsByTagName("table")[0];

    if (cell.style.backgroundColor == "green") {
      pintar = true;
    }

    // De acuerdo a la celda de meta se da un área protegida para no entrar
    // en conflicto con condición de no volver a la izquierda

    for (var i = 0; i < tam; i++) {
      if (tbl.rows[i].cells[tam - 1].style.backgroundColor == "red") {
        var filaProtegida = i;
      }
    }

    // Identificar fila y columna de la celda seleccionada

    var fila = cell.closest("tr").rowIndex;
    var col = cell.cellIndex;

    // Comprobar condiciones de borde

    var borde = [false, false, false, false];

    if (fila - 1 < 0) {
      borde[0] = true;
    }

    if (col + 1 > tam - 1) {
      borde[1] = true;
    }

    if (fila + 1 > tam - 1) {
      borde[2] = true;
    }

    if (col - 1 < 0) {
      borde[3] = true;
    }

    // Comprobación de condición de celda adyacente activada
    // En el ciclo se trabaja en conjunto con la comprobación
    // de las condiciones de borde vistas antes

    for (var i = 0; i < borde.length; i++) {
      if (!borde[i]) {
        var fila2 = fila - Math.round(Math.sin(Math.PI * ((i + 1) / 2)));
        var col2 = col + Math.round(Math.sin(Math.PI * (i / 2)));
        // alert(fila2 + " - " + col2)
        if (tbl.rows[fila2].cells[col2].style.backgroundColor == "red") {
          var pintar2 = true;
          // Si se pinta una celda adyacente a la celda meta
          if (fila2 == filaProtegida && col2 == tam - 1) {
            var ganar = true;
          }
          // Si se pinta una celda al lado izquierdo de una celda activa
          // que no sea la celda meta
          if (i == 1 && fila != filaProtegida) {
            pintar2 = false;
            break;
          }
        }
      }
    }

    // Si todas las condiciones son ideales, se pinta la celda

    if (pintar && pintar2) {
      cell.style.backgroundColor = "red";
    } else {
      alert("No puedes seleccionar esta celda");
      ganar = false;
    }

    // Si se pintó una celda adyacente a la celda meta

    if (ganar) {
      var pasos = -2;
      cells.forEach(cell => {
        if (cell.style.backgroundColor == "red") {
          pasos += 1;
        }
      })
      alert("¡HAS GANADO CON UN TOTAL DE " + pasos + " PASOS!")
    }
  }, true);
});
