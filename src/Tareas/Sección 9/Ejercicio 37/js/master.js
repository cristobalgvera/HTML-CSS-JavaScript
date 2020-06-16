$(document).ready(function() {
  $('canvas').drawPolygon({
    fillStyle: "blue",
    draggable: true,
    x: 100,
    y: 100,
    radius: 50,
    sides: 4,
    mouseover: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: getRandomColor()
      }, 500);
    },
    mouseout: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: 'blue'
      }, 500);
    },
  });
  $('canvas').drawPolygon({
    fillStyle: "red",
    draggable: true,
    x: 100,
    y: 250,
    radius: 50,
    sides: 3,
    mouseover: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: getRandomColor()
      }, 500);
    },
    mouseout: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: 'red'
      }, 500);
    },
  });
  $('canvas').drawEllipse({
    fillStyle: "green",
    draggable: true,
    x: 100,
    y: 400,
    width: 80,
    height: 80,
    mouseover: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: getRandomColor()
      }, 500);
    },
    mouseout: function(layer) {
      $(this).animateLayer(layer, {
        fillStyle: 'green'
      }, 500);
    },
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
