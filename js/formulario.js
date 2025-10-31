import { mostrarPeliculas } from "./peliculas.js";

const formulario = document.getElementById("formPeliculas");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const director = document.getElementById("director").value.trim();
  const año = document.getElementById("año").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const valoracion = document.getElementById("valoracion").value.trim();

  if (!titulo || !director || !año || !genero || !valoracion) {
    document.getElementById("mensaje-validacion").textContent =
      "Por favor, completa todos los campos.";
    return;
  }

  const nuevaPelicula = { titulo, director, año, genero, valoracion: Number(valoracion) };
  mostrarPeliculas(nuevaPelicula);

  formulario.reset();
  document.getElementById("mensaje-validacion").textContent = "";
});

// 🔧 Solo si el botón es type="button"
document.getElementById("btnAgregar").addEventListener("click", () => {
  formulario.requestSubmit();
});
