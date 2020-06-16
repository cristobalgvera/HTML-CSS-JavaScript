// $(document).ready(function() {
//   var tbl = $("#registros").DataTable({
//     buttons: [{
//       text: 'Export',
//       buttons: [
//         'copy',
//         'excel',
//         'csv',
//         'pdf',
//         'print'
//       ]
//     }]
//   });
//   // $("#registros").tableExport({
//   //   bootstrap: true,
//   //   footers: false,
//   //   position: "bottom"
//   // });
//   $("#agregador").validate({
//     rules: {
//       celular: {
//         rangelength: [8, 8]
//       }
//     },
//     messages: {
//       nombre: "Debes ingresar un nombre",
//       apellido: "Debes ingresar un apellido",
//       correo: "Correo electrónico incorrecto",
//       celular: "Número inválido, debe contener 8 dígitos",
//       edad: "Debes ingresar un edad adecuada"
//     }
//   });
//   $("#agregar").click(function() {
//     let registro = agregador.querySelectorAll("input")
//     let registroDatos = new Array()
//     if ($("#agregador").valid()) {
//       for (var i = 0; i < registro.length - 1; i++) {
//         registroDatos.push(registro[i].value)
//         if (i == 4 && registro[i].value != "") {
//           registroDatos[i] = "+569" + registroDatos[i]
//         }
//       }
//       tbl.row.add(registroDatos).draw();
//       agregador.reset()
//     }
//   });
// });

var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function() {
  $('#registros').DataTable({
    select: true,
    colReorder: true,
    buttons: [{
      text: 'Export',
      buttons: [
        'copy',
        'excel',
        'csv',
        'pdf',
        'print'
      ]
    }]
  });
});
