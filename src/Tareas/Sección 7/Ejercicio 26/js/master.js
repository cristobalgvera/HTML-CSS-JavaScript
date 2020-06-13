var tbl = document.getElementsByTagName("table")[0];
var icons = ["X", "O"];
var player = 0;
var game = new Array(3);
var turno = 0;
var check = [horizontal, vertical, diagonalD, diagonalI]
var winner = -1;
playerTurn();

for (var i = 0; i < game.length; i++) {
  game[i] = new Array(3)
}

const cells = tbl.querySelectorAll("td");
cells.forEach(cell => {
  cell.addEventListener("click", function choices() {
    if (cell.innerHTML == "") {
      fila = cell.closest("tr").rowIndex;
      col = cell.cellIndex;
      game[fila][col] = player;
      cell.innerHTML = icons[player];
      updateState();
    }
  }, true);
});

function playerTurn() {
  if (winner == -1) {
    currentPlayer.innerHTML = `Turno del jugador: <b>${icons[player]}</b>`;
  } else if (turno == 9 && winner == -1) {
    alert("Ha sido un empate")
    currentPlayer.innerHTML = "Ha sido un empate"
  } else {
    alert("Ha ganado el jugador " + icons[winner]);
    currentPlayer.innerHTML = `Ha ganado el jugador <b>${icons[winner]}</b>`;
    function sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    sleep(2000).then(() => {
      location.reload();
    });
  }
}

function updateState() {
  turno++;
  if (turno > 4) {
    for (var i = 0; i < check.length; i++) {
      winner = check[i]();
      if (winner > -1) {
        break;
      }
    }
  }
  if (player == 0) {
    player = 1;
  } else {
    player = 0;
  }
  playerTurn();
}

function checking(counter) {
  if (counter[0] == 3) {
    return 0
  } else if (counter[1] == 3) {
    return 1
  }
  return -1
}

function horizontal() {
  for (var i = 0; i < game.length; i++) {
    let counter = [0, 0]
    for (var j = 0; j < game[i].length; j++) {
      if (game[i][j] == 0) {
        counter[0]++;
      }
      if (game[i][j] == 1) {
        counter[1]++;
      }
    }
    var checkedCounter = checking(counter);
    if (checkedCounter > -1) {
      return checkedCounter;
    }
  }
  return checkedCounter;
}

function vertical() {
  for (var i = 0; i < game.length; i++) {
    let counter = [0, 0]
    for (var j = 0; j < game[i].length; j++) {
      if (game[j][i] == 0) {
        counter[0]++;
      }
      if (game[j][i] == 1) {
        counter[1]++;
      }
    }
    var checkedCounter = checking(counter);
    if (checkedCounter > -1) {
      return checkedCounter;
    }
  }
  return checkedCounter;
}

function diagonalD() {
  let counter = [0, 0]
  for (var i = 0; i < game.length; i++) {
    if (game[i][i] == 0) {
      counter[0]++
    }
    if (game[i][i] == 1) {
      counter[1]++
    }
  }
  return checking(counter);
}

function diagonalI() {
  let counter = [0, 0]
  for (var i = 0; i < game.length; i++) {
    if (game[2 - i][i] == 0) {
      counter[0]++
    }
    if (game[2 - i][i] == 1) {
      counter[1]++
    }
  }
  return checking(counter);
}
