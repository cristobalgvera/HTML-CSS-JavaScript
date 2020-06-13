var listRtg = document.getElementById("rtgId");
var listRmn = document.getElementById("rmnId");

for (var i = 0; i < 10; i++) {
  var listToRtg = document.createElement("li")
  listToRtg.className = "rtg"
  listRtg.appendChild(listToRtg)
  var listToRmn = document.createElement("li")
  listToRmn.className = "rmn"
  listRmn.appendChild(listToRmn)
}

function wrt() {
  var listRtg_elements = listRtg.querySelectorAll("li");
  var listRmn_elements = listRmn.querySelectorAll("li");
  var text = document.getElementById("txt");
  if (text.value != "") {
    if (rectangle.checked) {
      var verificador = true;
      listRtg_elements.forEach(listValue => {
        if (listValue.innerHTML == 0 && verificador) {
          listValue.innerHTML = text.value;
          verificador = false;
        }
      })
    } else {
      var verificador = true;
      listRmn_elements.forEach(listValue => {
        if (listValue.innerHTML == "" && verificador) {
          listValue.innerHTML = text.value;
          verificador = false;
        }
      })
    }
    text.value = "";
  } else {
    alert("Debes ingresar algo en la caja de texto")
  }
}
