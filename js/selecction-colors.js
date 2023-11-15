let nombreJugador = document.getElementById("nombreJugador");

let recibirNombreJugador = sessionStorage.getItem("nombreJugador");

nombreJugador.innerHTML = `${recibirNombreJugador} selecciona los colores: `;
