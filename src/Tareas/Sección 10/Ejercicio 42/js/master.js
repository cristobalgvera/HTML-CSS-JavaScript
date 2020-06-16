$(document).ready(function() {
  $("#draggable").draggable();
  $("#tabs").tabs({
    active: 0
  });
  $("#selectMenu").selectmenu();
  with($("#btn")) {
    button();
    click(function(event) {
      with($("#dialog")) {
        prop("innerHTML", "<p>Tu calificación fue de </p>")
        append($("#selectMenu").prop("value"))
        dialog();
      }
    });
  }
});
