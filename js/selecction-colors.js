let tablero = document.getElementById("coloresPrincipales");
let tableroColores = document.getElementById("coloresEscoger");
let numFilas = sessionStorage.getItem("cantidadColores");
numFilas = parseInt(numFilas);
let numColores = 10;

let nombreJugador = document.getElementById("nombreJugador");
let recibirNombreJugador = sessionStorage.getItem("nombreJugador");
recibirNombreJugador.toUpperCase(recibirNombreJugador);
nombreJugador.innerHTML = `${recibirNombreJugador} `;

const crearFilasIntentos = (numeroFilas, tableroJuego) => {
  let contenedorFilas = document.createElement("div");
  let contenedorInputs = document.createElement("div");
  contenedorFilas.classList.add("contenedor-intentos");
  contenedorInputs.classList.add("contenedor-inputs");
  for (let i = 0; i < numeroFilas; i++) {
    let numeroFila = document.createElement("div");
    let colorInput = document.createElement("input");
    colorInput.setAttribute("type", "color");
    colorInput.setAttribute("id", "color" + i);
    numeroFila.setAttribute("id", "posicion" + i);
    numeroFila.classList.add("intento");
    numeroFila.classList.add("intento");
    colorInput.classList.add("color" + 0);

    contenedorFilas.appendChild(numeroFila);
    contenedorInputs.appendChild(colorInput);
  }
  tableroJuego.appendChild(contenedorFilas);
  tableroJuego.appendChild(contenedorInputs);
};

crearFilasIntentos(numFilas, tablero);

const crearFilasColores = (numeroFilas, tableroJuego, intento) => {
  let contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-intentos");
  for (let i = 0; i < numeroFilas; i++) {
    let numeroFila = document.createElement("div");
    numeroFila.setAttribute("id", "posicion" + i);
    numeroFila.classList.add("intento");
    numeroFila.classList.add("color" + intento);
    contenedorFilas.appendChild(numeroFila);
  }
  tableroJuego.appendChild(contenedorFilas);
};

let contenedorColores = document.querySelectorAll(".color0");

let inputColores = document.querySelectorAll(".color0");
let filaColores = document.querySelectorAll(".intento");
let coloresJugar = [];
for (let i = 0; i < filaColores.length; i++) {
  inputColores[i].addEventListener("input", function () {
    let colorInput = inputColores[i].value;
    filaColores[i].style.backgroundColor = colorInput;
    let colorRgb = getComputedStyle(filaColores[i]).getPropertyValue(
      "background-color"
    );
    coloresJugar[i] = colorRgb;
  });
}

let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function () {
  sessionStorage.setItem("coloresJugar", JSON.stringify(coloresJugar));
  location.href = "./game.html";
});

let btnHome = document.getElementById("btnHome");
btnHome.addEventListener("click", function () {
  window.location.href = "../index.html";
});
