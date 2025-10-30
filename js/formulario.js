import { agregarPelicula } from './peliculas.js';

const formulario = document.getElementById("formPeliculas");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const director = document.getElementById("director").value.trim();
  const anio = document.getElementById("anio").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const valoracion = Number(document.getElementById("valoracion").value.trim());

  if (!titulo || !director || !anio || !genero || !valoracion) {
    document.getElementById("mensaje-validacion").textContent =
      "Por favor, completa todos los campos.";
    return;
  }

  const nuevaPelicula = { titulo, director, anio, genero, valoracion };

  // ✅ Llamamos a la función que maneja la lista global
  agregarPelicula(nuevaPelicula);

  formulario.reset();
  document.getElementById("mensaje-validacion").textContent = "";
});

document.getElementById("btnAgregar")?.addEventListener("click", () => {
  formulario.dispatchEvent(new Event("submit"));
});
