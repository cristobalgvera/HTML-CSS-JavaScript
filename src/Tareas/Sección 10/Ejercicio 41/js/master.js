$(document).ready(function() {
  var controller = new slidebars();
  controller.init()
  $('.toggle-id-1').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    controller.toggle('id-1');
  });
});
