
function ejecutarOpcion() {
  var opcionSeleccionada = document.getElementById("opcion").value;
  var ejercicioOpcionSeleccionada = document.getElementById("ejercicio-opcion").value;
  
  if (opcionSeleccionada === "10") {
    window.open("https://www.netflix.com", "_blank");
  } else if (opcionSeleccionada === "4" && ejercicioOpcionSeleccionada !== "") {
    // Ejecutar la opción de ejercicio seleccionada
    console.log("Realizando ejercicio:", ejercicioOpcionSeleccionada);
    iniciarContador();
  } else {
    iniciarContador();
  }
}

function iniciarContador() {
  var tiempoRestante = 900; // Tiempo en segundos

  var intervalo = setInterval(function() {
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;

    var minutosTexto = minutos < 10 ? "0" + minutos : minutos;
    var segundosTexto = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("countdown").textContent = minutosTexto + ":" + segundosTexto;

    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      document.getElementById("countdown").textContent = "Tiempo finalizado";
    } else {
      tiempoRestante--;
    }
  }, 1000);
}
function mostrarOpcionesEjercicio() {
    var opcionSeleccionada = document.getElementById("opcion").value;
    var ejercicioPoses = document.getElementById("poses-yoga");
    
    if (opcionSeleccionada === "8") {
      ejercicioPoses.style.display = "block";
    } else {
      ejercicioPoses.style.display = "none";
    }
  }
  function mostrarOpcionesEjercicio() {
    var opcionSeleccionada = document.getElementById("opcion").value;
    var ejercicioOptions = document.querySelector(".exercise-options");
    var ejercicioPoses = document.getElementById("poses-yoga");
  
    if (opcionSeleccionada === "8") {
      ejercicioOptions.style.display = "block";
      ejercicioOptions.style.display = "none"; // Oculta las opciones del 4
      ejercicioPoses.style.display = "block";
    } else if (opcionSeleccionada === "4") {
      ejercicioOptions.style.display = "block";
      ejercicioOptions.style.display = "block"; // Muestra las opciones del 4
      ejercicioPoses.style.display = "none";
    } else {
      ejercicioOptions.style.display = "none";
      ejercicioPoses.style.display = "none";
    }
  }
  