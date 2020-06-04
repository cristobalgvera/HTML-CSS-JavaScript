function main1() {
  var n1 = Number(prompt("Ingrese el primer número"));
  var n2 = Number(prompt("Ingrese el segundo número"));
  majorNumber(n1, n2);
  zeroComparison(n1, n2);
  plusOne(n1, n2);
}

function majorNumber(n1, n2) {
  if (n1 > n2) {
    alert(n1 + " es mayor que " + n2);
  } else if (n2 > n1) {
    alert(n2 + " es mayor que " + n1);
  } else {
    alert("Son iguales");
  }
}

function zeroComparison(n1, n2) {
  if (n1 <= 0 || n2 <= 0) {
    alert("Alguno de los valores es menor o igual a cero")
  }
}

function plusOne(n1, n2) {
  var msg = n1 + " + 1 ";
  if (n1 + 1 > n2) {
    msg += "es mayor que "
  } else if (n1 + 1 == n2) {
    msg += "es igual que "
  } else {
    msg += "sigue siendo menor que "
  }
  alert(msg + n2)
}
