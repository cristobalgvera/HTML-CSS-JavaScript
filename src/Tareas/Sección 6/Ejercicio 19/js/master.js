function escribir(arg) {
  var val = document.form1.cajatexto.value;
  document.form1.cajatexto.value = val + arg;
}

function calcular() {
  var val = document.form1.cajatexto.value;
  document.form1.cajatexto.value = eval(val);
}
