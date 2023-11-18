let tablero = document.getElementById("coloresPrincipales");
let tableroColores = document.getElementById("coloresEscoger");
let numFilas = sessionStorage.getItem("cantidadColores");
numFilas = parseInt(numFilas);
let numColores = 10;
let coloresPrincipales = [
  "black",
  "red",
  "green",
  "yellow",
  "orange",
  "blue",
  "pink",
  "purple",
  "brown",
  "grey",
  "lime",
  "maroon",
  "navy",
  "olive",
  "teal",
  "aqua",
  "teal",
];

const obtenerColoresAleatorios = (coloresPrincipales) => {
  return coloresPrincipales.sort(() => Math.random() - 0.5);
};

let obtenerColoresAleatoriosFinal =
  obtenerColoresAleatorios(coloresPrincipales);

console.log(obtenerColoresAleatoriosFinal);

let nombreJugador = document.getElementById("nombreJugador");
let recibirNombreJugador = sessionStorage.getItem("nombreJugador");
nombreJugador.innerHTML = `${recibirNombreJugador} selecciona los colores para jugar: `;

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

//crearFilasColores(numColores, tableroColores,0);

let contenedorColores = document.querySelectorAll(".color0");
console.log(contenedorColores);

// const asignarColores = (contenedorColores,coloresPrincipales) => {
//   for (let i = 0; i < contenedorColores.length; i++) {
//     contenedorColores[i].style.backgroundColor = coloresPrincipales[i];
//   }
// }

// asignarColores(contenedorColores,obtenerColoresAleatoriosFinal);

let inputColores = document.querySelectorAll(".color0");
let filaColores = document.querySelectorAll(".intento");
let coloresJugar = [];
for (let i =0; i < filaColores.length; i++) {
inputColores[i].addEventListener("input", function () {
  let colorInput = inputColores[i].value;
  filaColores[i].style.backgroundColor = colorInput;
  let colorRgb = getComputedStyle(filaColores[i]).getPropertyValue("background-color");
  coloresJugar[i] = colorRgb;
})};
console.log(coloresJugar);
let btnEnviar= document.getElementById("enviar");

btnEnviar.addEventListener("click", function () {
sessionStorage.setItem("coloresJugar", JSON.stringify(coloresJugar));
location.href = "./pruebas.html";
});
