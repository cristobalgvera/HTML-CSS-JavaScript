$(document).ready(function() {
  $("#accordion").accordion();
  $("#resizable").resizable();
  $("button").click(function(event) {
    $("#dialog").dialog();
  });
});

// $(".accordion-titulo").click(function() {
//
//   var contenido = $(this).next(".accordion-content");
//
//   if (contenido.css("display") == "none") {
//     contenido.slideDown(250);
//     $(this).addClass("open");
//   } else {
//     contenido.slideUp(250);
//     $(this).removeClass("open");
//   }
//
// });
//
// function fontSize() {
//   with($("#ttl")){
//     alert(css("width"))
//     css('font-size', prop("width"));
//   }
//   alert("asi")
// }
