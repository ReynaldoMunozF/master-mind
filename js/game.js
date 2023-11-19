let tablero = document.getElementById("tablero-principal");
let numFilas = sessionStorage.getItem("cantidadColores");
numFilas = parseInt(numFilas); //cambiar por numero de colores
let numIntentos = sessionStorage.getItem("intentos");
numIntentos = parseInt(numIntentos);
const combinacionColores = JSON.parse(sessionStorage.getItem("coloresJugar"));
let tableroAciertos = document.getElementById("tablero-aciertos");
let tableroColores = document.getElementById("colores-escogidos");

// crear combinacion ganadora
//-------------------------------------------------------------------------------->
const obtenerCombinacionGanadora = (combinacionColores) => {
  return combinacionColores.sort(() => Math.random() - 0.5);
};

//-------------------------------------------------------------------------------->

const crearFilasIntentos = (numeroFilas, tableroJuego, intento) => {
  let contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-intentos");
  for (let i = 0; i < numeroFilas; i++) {
    let numeroFila = document.createElement("div");
    numeroFila.setAttribute("id", "posicion-" + i + "-intento-" + intento);
    numeroFila.classList.add("intento");
    numeroFila.classList.add("intento" + intento);
    contenedorFilas.appendChild(numeroFila);
  }
  tableroJuego.appendChild(contenedorFilas);
};

const crearFilasAciertos = (numeroFilas, tableroJuego, intento) => {
  let contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-intentos");
  for (let i = 0; i < numeroFilas; i++) {
    let numeroFila = document.createElement("div");
    numeroFila.setAttribute("id", "posicion-" + i + "-intento-" + intento);
    numeroFila.classList.add("intento");
    numeroFila.classList.add("acierto" + intento);
    contenedorFilas.appendChild(numeroFila);
  }
  tableroJuego.appendChild(contenedorFilas);
};

const crearTableroIntentos = (numeroIntentos, numFilas, tablero) => {
  for (let i = 0; i < numeroIntentos; i++) {
    crearFilasIntentos(numFilas, tablero, i);
  }
};
const crearTableroAciertos = (numeroIntentos, numFilas, tablero) => {
  for (let i = 0; i < numeroIntentos; i++) {
    crearFilasAciertos(numFilas, tablero, i);
  }
};
crearTableroAciertos(numIntentos, numFilas, tableroAciertos);

const agruparAciertos = (aciertosJuego) => {
  let acierto = document.querySelectorAll(".acierto" + aciertosJuego);
  return acierto;
};

const nuevoIntento = (numeroDeColores, intentoJuego) => {
  let intento = document.querySelectorAll(".intento" + intentoJuego);
  let intentoJugado = [];
  for (let i = 0; i < numeroDeColores; i++) {
    intento[i].addEventListener("click", function () {
      let colorEscogido = sessionStorage.getItem("colorEscogido");
      intentoJugado[i] = colorEscogido;
      intento[i].style.backgroundColor = colorEscogido;
      sessionStorage.removeItem("colorEscogido");
    });
  }
  return intentoJugado;
};

const existeGanador = (combinacionJugador, combinacionGanadora) => {
  for (let i = 0; i < combinacionGanadora.length; i++) {
    if (combinacionGanadora[i] !== combinacionJugador[i]) {
      return false;
    }
  }
  return true;
};
const aciertos = (combinacionJugador, combinacionGanadora) => {
  let pintarAciertos = [];
  for (let i = 0; i < combinacionGanadora.length; i++) {
    if (combinacionGanadora[i] == combinacionJugador[i]) {
      pintarAciertos.push(1);
    } else {
      pintarAciertos.push(0);
    }
  }
  return pintarAciertos;
};
let btnHome = document.getElementById("btnHome");
btnHome.addEventListener("click", function () {
  window.location.href = "../index.html";
});

// Crea el array random
//--------------------------------------------------------->
const combinacionGanadora = obtenerCombinacionGanadora(combinacionColores);
console.log(combinacionGanadora);

// Crea tablero de jego
//--------------------------------------------------------->
crearTableroIntentos(numIntentos, numFilas, tablero);
//--------------------------------------------------------->

const crearFilasColores = (numeroFilas, tableroJuego) => {
  let contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-colores");
  for (let i = 0; i < numeroFilas; i++) {
    let numeroFila = document.createElement("div");
    numeroFila.setAttribute("id", "posicion-" + i);
    numeroFila.classList.add("intento");
    numeroFila.classList.add("color" + 0);
    contenedorFilas.appendChild(numeroFila);
  }
  tableroJuego.appendChild(contenedorFilas);
};
crearFilasColores(numFilas, tableroColores);

let contenedorColores = document.querySelectorAll(".color0");
let recogerColores = JSON.parse(sessionStorage.getItem("coloresJugar"));
console.log(recogerColores);

for (let i = 0; i < contenedorColores.length; i++) {
  contenedorColores[i].style.backgroundColor = recogerColores[i];

  contenedorColores[i].addEventListener("click", function () {
    let color0 = contenedorColores[i].style.backgroundColor;
    sessionStorage.setItem("colorEscogido", color0);
  });
}

const verificarAciertos = (aciertosAgrupados, confirmarAciertos) => {
  for (let i = 0; i < aciertosAgrupados.length; i++) {
    if (confirmarAciertos[i] == 1) {
      aciertosAgrupados[i].style.backgroundColor = "white";
    } else {
      aciertosAgrupados[i].style.backgroundColor = "black";
    }
  }
};

let validar = document.getElementById("validar");
let numIntento = 0;
let esJugadaGanadora = false;

let combinacionJugador = nuevoIntento(numFilas, numIntento);
let aciertosAgrupados = agruparAciertos(numIntento);

validar.addEventListener("click", function () {
  console.log(numIntento);
  if (combinacionJugador.length == 0) {
    return;
  }
  console.log(combinacionJugador);

  esJugadaGanadora = existeGanador(combinacionJugador, combinacionGanadora);
  let pintarAciertos = aciertos(combinacionJugador, combinacionGanadora);

  verificarAciertos(aciertosAgrupados, pintarAciertos);
  if (esJugadaGanadora) {
    location.href = "./winner.html";
  } else {
    numIntento++;
    combinacionJugador = nuevoIntento(numFilas, numIntento);
    aciertosAgrupados = agruparAciertos(numIntento);
  }
});
