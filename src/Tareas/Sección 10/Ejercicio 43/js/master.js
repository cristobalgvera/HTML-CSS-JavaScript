var ciudades = "Arica,Iquique,Calama,Antofagasta,Caldera,La Serena,Valparaíso,Rodelillo,Pudahuel,Santiago,Tobalaba,Juan Fernández,Curicó,Chillán,Concepción,Temuco,Valdivia,Osorno,Puerto Montt,Coyhaique,Balmaceda,Punta Arenas"
var totalPrep = "6.2,4.4,18.6,0.4,0.8,12.2,83.2,117.4,47.2,82.0,99.4,679.7,162.4,626.8,715.6,787.5,1052.9,833.8,1073.2,732.6,0.0,311.4"
var normalPrep = "1.6,0.9,5.9,2.4,0.0,86.5,412.2,0.0,275.8,340.6,365.0,1028.7,654.2,1046.4,1072.6,1117.5,1705.8,1203.8,1539.9,942.2,515.5,383.1"
var sumaTotalPrep = 0;
var porcentajeTotalPrep = new Array()
var colour = new Array()

ciudades = ciudades.split(",")
totalPrep = totalPrep.split(",")
normalPrep = normalPrep.split(",")

totalPrep.forEach(prep => {
  sumaTotalPrep += eval(prep)
  colour.push(getRandomColor())
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

totalPrep.forEach(prep => {
  porcentajeTotalPrep.push((prep / sumaTotalPrep) * 100)
});

var ctx = document.getElementById('bar').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ciudades,
    datasets: [{
      label: 'Total precipitaciones',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: totalPrep
    }]
  },

  // Configuration options go here
  options: {}
});

var ctx1 = document.getElementById("line").getContext("2d");
var chart2 = new Chart(ctx1, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ciudades,
    datasets: [{
      label: 'Total precipitaciones',
      backgroundColor: 'transparent',
      borderColor: 'red',
      data: totalPrep
    }, {
      label: 'Normal precipitaciones',
      backgroundColor: "transparent",
      borderColor: "blue",
      data: normalPrep
    }]
  },

  // Configuration options go here
  options: {}
});

var ctx2 = document.getElementById('pie').getContext('2d');
var chart2 = new Chart(ctx2, {
  // The type of chart we want to create
  type: "pie",

  // The data for our dataset
  data: {
    labels: ciudades,
    datasets: [{
      label: 'Porcentaje precipitaciones',
      backgroundColor: colour,
      borderColor: colour,
      data: porcentajeTotalPrep
    }]
  },

  // Configuration options go here
  options: {}
});
