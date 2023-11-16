let tablero = document.getElementById("tablero-principal");
let numFilas = 4; //cambiar por numero de colores
let numIntentos = 8;
const combinacionColores = ["red", "green", "blue", "yellow"];
let tableroAciertos = document.getElementById("tablero-aciertos");
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
      intentoJugado.splice(i, 1, colorEscogido);
      intento[i].style.backgroundColor = colorEscogido;
      sessionStorage.clear();
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

// Crea el array random
//--------------------------------------------------------->
const combinacionGanadora = obtenerCombinacionGanadora(combinacionColores);
console.log(combinacionGanadora);

// Crea tablero de jego
//--------------------------------------------------------->
crearTableroIntentos(numIntentos, numFilas, tablero);

let colorEscogidoUno = document.getElementById("color-escogido-Uno");
let colorEscogidoDos = document.getElementById("color-escogido-Dos");
let colorEscogidoTres = document.getElementById("color-escogido-Tres");
let colorEscogidoCuatro = document.getElementById("color-escogido-Cuatro");
let colorEscogidoCinco = document.getElementById("color-escogido-Cinco");

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
  
  esJugadaGanadora = existeGanador(combinacionJugador, combinacionGanadora);
  let pintarAciertos = aciertos(combinacionJugador, combinacionGanadora);
  
  verificarAciertos(aciertosAgrupados, pintarAciertos);
  if (esJugadaGanadora) {
    alert("Ganaste");
  } else {
    
    numIntento++;
    combinacionJugador = nuevoIntento(numFilas, numIntento);
    aciertosAgrupados = agruparAciertos(numIntento);
  }
});
