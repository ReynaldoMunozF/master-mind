let tablero = document.getElementById("tablero-principal");
let numFilas = 5;
let numIntentos = 8;
const combinacionColores = ["red", "green", "blue", "yellow", "orange"];
// crear combinacion ganadora
//-------------------------------------------------------------------------------->
const obtenerCombinacionGanadora = (combinacionColores) => {
  return combinacionColores.sort(() => Math.random() - 0.5);
};
const combinacionGanadora = obtenerCombinacionGanadora(combinacionColores);
console.log(combinacionGanadora);

//-------------------------------------------------------------------------------->

const crearFilasIntentos = (numeroFilas, tableroJuego, intento) => {
  let contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-intentos");
  for (let i = 0; i < numeroFilas; i++) {
    let numeroFila = document.createElement("div");
    numeroFila.setAttribute("id", "posicion-" + i + "-intento-" + intento);
    numeroFila.classList.add("intento");
    numeroFila.classList.add("intento"+intento);
    contenedorFilas.appendChild(numeroFila);
  }
  tableroJuego.appendChild(contenedorFilas);
};

//crearFilasIntentos(numFilas,tablero)
const crearTableroIntentos = (numeroIntentos, numFilas, tablero) => {
  for (let i = 0; i < numeroIntentos; i++) {
    crearFilasIntentos(numFilas, tablero, i);
  }
};
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

let combinacionJugador = [];

let intentoJuego = 0;
const nuevoIntento = (numerofilas , intentoJuego) => {
  let intentoFinal = [];
  for (let i = 0; i < 5; i++) {
    let intento = document.querySelectorAll(".intento"+intentoJuego);
    intentoFinal.push(intento[i]);
    
    }
  for (let i = 0; i < numerofilas; i++) {
    intentoFinal[i].addEventListener("click", function () {
      let posicionUnoFinal = sessionStorage.getItem("colorEscogido");
      combinacionJugador.splice(i, 1, posicionUnoFinal);
      intentoFinal[i].style.backgroundColor = posicionUnoFinal;
      sessionStorage.clear();
    });
  }
};
const existeGanador = (combinacionJugador, combinacionGanadora, ) => {
 
  for (let i = 0; i < combinacionJugador.length; i++) {
    if (combinacionGanadora[i] !== combinacionJugador[i]) {
      return false;
    }
    return true;
  }

};

const validar = document.getElementById("validar");

nuevoIntento(numFilas,intentoJuego);

for (let i = 0; i < numIntentos; i++) {
 
  validar.addEventListener("click", function () {
    if (existeGanador(combinacionJugador, combinacionGanadora)) {
      alert("Ganaste");
    } else {
        
    }
    console.log(combinacionJugador);
  });
}
