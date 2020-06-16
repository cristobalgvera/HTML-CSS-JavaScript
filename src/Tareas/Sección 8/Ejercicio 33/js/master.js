const botones = fomulario.querySelectorAll("input")

$(document).ready(function() {
  for (var i = 0; i < botones.length; i++) {
    let x = 10 * Math.round(Math.sin(Math.PI * (i / 2)));
    let y = -10 * Math.round(Math.sin(Math.PI * (i + 1) / 2));
    $(botones[i]).click(function() {
      with($("#caja")) {
        let px = position().left + x
        let py = position().top + y
        css({
          top: py,
          left: px,
        });
      }
    });
  }
});
