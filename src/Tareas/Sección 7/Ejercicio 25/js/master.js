var clp = document.getElementById("clp")
var exchange = document.getElementById("exchange")
var badgeType = [0.0013, 0.0011, 0.14, 0.0044, 0.0010]
var badgeName = ["Dólares", "Euros", "Yenes", "Soles", "Libras"]
var txt = errorMsg.querySelector("textarea");

function _moneyExchange() {
  let badges = exchange.querySelectorAll("input")
  badges.forEach(badge => {
    if (badge.checked) {
      moneyExchange.value = clp.value * badgeType[badge.value];
      divisa.innerHTML = `
      ${badgeName[badge.value]}<br>$
      `;
      if (isNaN(moneyExchange.value)) {
        txt.classList.add("issues")
        txt.value = "Sólo puedes ingresar números"
        moneyExchange.value = "";
      } else {
        txt.classList.remove("issues")
        txt.value = "Todo está correcto"
      }
    }
  })
}
