let btnPrincipiante = document.getElementById("lvlPrincipiante");
let btnIntermedio = document.getElementById("lvlIntermedio");
let btnAvanzado = document.getElementById("lvlAvanzado");
let btnHome = document.getElementById("btnHome");


btnPrincipiante.addEventListener("click", function () {
  let nombreJugador = document.getElementById("nombreJugador").value;
  sessionStorage.setItem("nombreJugador", nombreJugador);
  sessionStorage.setItem("nivel", "principiante");
  sessionStorage.setItem("intentos", "9");
  sessionStorage.setItem("cantidadColores", "4");
  location.href = "./selecction-colors.html";
  
});
btnIntermedio.addEventListener("click", function () {
  let nombreJugador = document.getElementById("nombreJugador").value;
  sessionStorage.setItem("nombreJugador", nombreJugador);
  sessionStorage.setItem("nivel", "intermedio");
  sessionStorage.setItem("intentos", "8");
  sessionStorage.setItem("cantidadColores", "5");
  location.href = "./selecction-colors.html";
  
});
btnAvanzado.addEventListener("click", function () {
  let nombreJugador = document.getElementById("nombreJugador").value;
  sessionStorage.setItem("nombreJugador", nombreJugador);
  sessionStorage.setItem("nivel", "avanzado");
  sessionStorage.setItem("intentos", "6");
  sessionStorage.setItem("cantidadColores", "6");
  location.href = "./selecction-colors.html";
  
});







btnHome.addEventListener("click", function () {
  window.location.href = "../index.html";
});
