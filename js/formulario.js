import { mostrarPeliculas, peliculas } from "./peliculas.js"; // Importamos lista global

const formulario = document.getElementById("formPeliculas");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const director = document.getElementById("director").value.trim();
  const anio = document.getElementById("anio").value.trim(); // Corregido id
  const genero = document.getElementById("genero").value.trim();
  const valoracion = document.getElementById("valoracion").value.trim();

  // Validación de campos
  if (!titulo || !director || !anio || !genero || !valoracion) {
    document.getElementById("mensaje-validacion").textContent =
      "Por favor, completa todos los campos.";
    return;
  }

  //Creamos la película y la agregamos a la lista global
  const nuevaPelicula = { titulo, director, anio, genero, valoracion: Number(valoracion) };
  peliculas.push(nuevaPelicula);

  // Mostramos toda la lista actualizada
  mostrarPeliculas(peliculas);

  formulario.reset();
  document.getElementById("mensaje-validacion").textContent = "";
});

// Botón Agregar (si type=button)
document.getElementById("btnAgregar")?.addEventListener("click", () => {
  formulario.dispatchEvent(new Event("submit"));
});
