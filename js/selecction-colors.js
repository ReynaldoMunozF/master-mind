let tablero = document.getElementById("coloresPrincipales");
let numFilas = 5;

const crearFilasIntentos = (numeroFilas, tableroJuego, intento) => {
    let contenedorFilas = document.createElement("div");
    contenedorFilas.classList.add("contenedor-intentos");
    for (let i = 0; i < numeroFilas; i++) {
      let numeroFila = document.createElement("div");
      numeroFila.setAttribute("id", "posicion" + i );
      numeroFila.classList.add("intento");
      numeroFila.classList.add("intento" );
      contenedorFilas.appendChild(numeroFila);
    }
    tableroJuego.appendChild(contenedorFilas);
  };
  
  crearFilasIntentos (numFilas,tablero)




let nombreJugador = document.getElementById("nombreJugador");

let recibirNombreJugador = sessionStorage.getItem("nombreJugador");

nombreJugador.innerHTML = `${recibirNombreJugador} selecciona los colores: `;
