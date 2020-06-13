var results = document.getElementById("results");
var tries = 0;
tryNumber.value = tries;
btn.addEventListener("click", send);

function send() {
  let puntaje = 0;
  let answers = new Array();
  let finish = true;
  const questions = userForm.querySelectorAll("div");
  questions.forEach(q => {
    var answered = false;
    let qAnswers = q.querySelectorAll("input");
    let d = q.querySelectorAll("label")[0];
    qAnswers.forEach(a => {
      if (a.checked) {
        answered = true;
        if (a.value == eval(d.innerHTML)) {
          puntaje++;
        }
      }
    });
    if (!answered) {
      finish = false;
    }
  });
  if (finish) {
    // Se anota el resultado
    let r = document.createElement("p")
    r.innerHTML = `
    El puntaje del intento ${tries + 1} fue: ${puntaje}/5
    `;
    results.appendChild(r);
    tries++;
    tryNumber.value = tries;
  } else {
    alert("Debes contestar todas las preguntas")
  }
  if (puntaje == 5 || tries > 2) {
    btn.removeEventListener("click", send)
    let msg = document.createElement("h1")
    if (puntaje == 5) {
      msg.innerHTML = "¡PUNTAJE MÁXIMO OBTENIDO!"
    } else {
      msg.innerHTML = "HAS COMPLETADO EL NÚMERO MÁXIMO DE INTENTOS"
      alert(msg.innerHTML)
    }
    winnerTxt.appendChild(msg);
  }
}
