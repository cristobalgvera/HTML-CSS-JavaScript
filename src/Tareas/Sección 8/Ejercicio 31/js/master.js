$(document).ready(function() {
  $("*").css('font-family', 'Calibri');
  const ranges = $("input:even")
  const values = $("input:odd")
  for (var i = 0; i < ranges.length; i++) {
    let range = ranges[i]
    let value = values[i]
    value.value = range.value
    $("#coloureable").css('background-color', 'rgb(' + values[0].value + ',' + values[1].value + ',' + values[2].value + ')');
    $(range).on('input', function() {
      value.value = range.value
      $("#coloureable").css('background-color', 'rgb(' + values[0].value + ',' + values[1].value + ',' + values[2].value + ')');
    })
  }
});
