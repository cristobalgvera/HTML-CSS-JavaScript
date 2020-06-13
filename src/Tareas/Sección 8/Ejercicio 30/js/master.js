$(document).ready(function() {
  $("*").css('font-family', 'Calibri');
  $("body").css("background-color", "pink");
  with($("p")) {
    css('border', '1.5px solid black');
    click(function(event) {
      $(this).hide("400")
    });
  }
  $("button").click(function() {
    $("p").show("400")
  });
});
