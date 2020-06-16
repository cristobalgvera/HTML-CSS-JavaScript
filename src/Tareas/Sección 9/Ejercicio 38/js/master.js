$(document).ready(function($) {
  jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#formulario" ).validate({
  rules: {
    clr: {
      lettersonly: true
    }
  }
});
});
