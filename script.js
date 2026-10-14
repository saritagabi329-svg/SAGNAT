const boton = document.getElementById("dispensar");
const estado = document.getElementById("estado");
const plato = document.getElementById("plato");

boton.addEventListener("click", () => {
  boton.disabled = true;
  boton.textContent = "Dispensando... 🍽️";
  estado.textContent = "La compuerta está abierta...";
  plato.classList.add("entregando");

  setTimeout(() => {
    estado.textContent =
      "¡Entrega simulada completada! La compuerta se cerró.";
    boton.textContent = "Dispensar otra vez";
    boton.disabled = false;
    plato.classList.remove("entregando");
  }, 1800);
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch(error => console.error("Error al registrar:", error));
  });
}
