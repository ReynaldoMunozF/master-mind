let colorEscogidoUno = document.getElementById("color-escogido-Uno");
let colorEscogidoDos = document.getElementById("color-escogido-Dos");
let colorEscogidoTres = document.getElementById("color-escogido-Tres");
let colorEscogidoCuatro = document.getElementById("color-escogido-Cuatro");
let colorEscogidoCinco = document.getElementById("color-escogido-Cinco");
//----------------------------------------------------------------
let posicionUno = document.getElementById("posicion-uno");
let posicionDos = document.getElementById("posicion-dos");
let posicionTres = document.getElementById("posicion-tres");
let posicionCuatro = document.getElementById("posicion-cuatro");
let posicionCinco = document.getElementById("posicion-cinco");
//----------------------------------------------------------------
let btnenviar = document.getElementById("enviar");

//-------------------- GENERO COMBINACION RANDOM -----------------
const combinacionColores = ["red", "green", "blue", "yellow", "orange"];
const obtenerCombinacionGanadora = (combinacionColores) => {
  return combinacionColores.sort(() => Math.random() - 0.5);
};
const combinacionGanadora = obtenerCombinacionGanadora(combinacionColores);
console.log(combinacionGanadora);

//----------------------------------------------------------------
colorEscogidoUno.onclick = function () {
  EscogidoUno = colorEscogidoUno.style.backgroundColor = "red";
  sessionStorage.setItem("colorEscogido", EscogidoUno);
};
colorEscogidoDos.onclick = function () {
  EscogidoDos = colorEscogidoDos.style.backgroundColor = "green";
  sessionStorage.setItem("colorEscogido", EscogidoDos);
};
colorEscogidoTres.onclick = function () {
  EscogidoTres = colorEscogidoTres.style.backgroundColor = "blue";
  sessionStorage.setItem("colorEscogido", EscogidoTres);
};
colorEscogidoCuatro.onclick = function () {
  EscogidoCuatro = colorEscogidoCuatro.style.backgroundColor = "yellow";
  sessionStorage.setItem("colorEscogido", EscogidoCuatro);
};
colorEscogidoCinco.onclick = function () {
  EscogidoCinco = colorEscogidoCinco.style.backgroundColor = "orange";
  sessionStorage.setItem("colorEscogido", EscogidoCinco);
};
//------------------------------------------------------------------

posicionUno.onclick = function () {
  let posicionUnoFinal = sessionStorage.getItem("colorEscogido");
  combinacionJugador.splice(0, 1, posicionUnoFinal);

  posicionUno.style.backgroundColor = posicionUnoFinal;
  sessionStorage.clear();
};

posicionDos.onclick = function () {
  let posicionDosFinal = sessionStorage.getItem("colorEscogido");
  combinacionJugador.splice(1, 1, posicionDosFinal);
  posicionDos.style.backgroundColor = posicionDosFinal;
  sessionStorage.clear();
};

posicionTres.onclick = function () {
  let posicionTresFinal = sessionStorage.getItem("colorEscogido");
  combinacionJugador.splice(2, 1, posicionTresFinal);
  posicionTres.style.backgroundColor = posicionTresFinal;
  sessionStorage.clear();
};
posicionCuatro.onclick = function () {
  let posicionCuatroFinal = sessionStorage.getItem("colorEscogido");
  combinacionJugador.splice(3, 1, posicionCuatroFinal);
  posicionCuatro.style.backgroundColor = posicionCuatroFinal;
  sessionStorage.clear();
};
posicionCinco.onclick = function () {
  let posicionCincoFinal = sessionStorage.getItem("colorEscogido");
  combinacionJugador.splice(4, 1, posicionCincoFinal);
  posicionCinco.style.backgroundColor = posicionCincoFinal;
  sessionStorage.clear();
};

const combinacionJugador = [];

// const colores = [
//   "rojo",
//   "amarillo",
//   "azul",
//   "naranja",
//   "verde",
//   "violeta",
//   "verde",
//   "rosado",
//   "negro",
//   "gris",
// ];

const condicionGanadora = [1, 1, 1, 1, 1];
console.log(condicionGanadora);

//-------------------- VERIFICACION DE ACIERTOS  -----------------
btnenviar.onclick = function () {
  const obtenerAciertos = (combinacionGanadora, combinacionJugador) => {
    let aciertos = [];

    for (let i = 0; i < combinacionGanadora.length; i++) {
      if (combinacionGanadora[i] === combinacionJugador[i]) {
        aciertos.push(1);
      } else {
        aciertos.push(0);
      }
    }
    return aciertos;
  };
  let aciertosTotal = obtenerAciertos(combinacionGanadora, combinacionJugador);
  const pintarAciertos = (aciertosTotal, combinacionJugador) => {
    const pintarAciertos = [];
    for (let i = 0; i < aciertosTotal.length; i++) {
      if (aciertosTotal[i] === 1) {
        pintarAciertos.push(combinacionJugador[i]);
      } else {
        pintarAciertos.push("");
      }
    }
    return pintarAciertos;
  };
  const aciertosPintados = pintarAciertos(aciertosTotal, combinacionJugador);

  console.log(aciertosPintados);

  const existeGanador = (aciertosTotal, condicionGanadora) => {
    for (let i = 0; i < aciertosTotal.length; i++) {
      if (condicionGanadora[i] !== aciertosTotal[i]) {
        return false;
      }
    }
    return true;
  };
  console.log(existeGanador(aciertosPintados, condicionGanadora));
};
