const botones = fomulario.querySelectorAll("input")

$(botones[0]).click(function() {
  alert($("#parrafo").text());
});

$(botones[1]).click(function() {
  alert(parrafo.innerHTML)
});

$(botones[2]).click(function() {
  alert(textArea.value)
});

$(botones[3]).click(function () {
  alert(enlace.href)
});
