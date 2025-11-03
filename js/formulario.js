import { mostrarPeliculas, actualizarPelicula } from "./peliculas.js";

let isEditing = false;
let editingIndex = null;
const formulario = document.getElementById("formPeliculas");
const formTitle = document.getElementById("formTitle");
const btnAgregar = document.getElementById("btnAgregar");
const btnCancelar = document.getElementById("btnCancelar");

function setEditMode(editing, index = null, pelicula = null) {
  isEditing = editing;
  editingIndex = index;
  formTitle.textContent = editing ? "Editando película" : "Añadir nueva película";
  formulario.classList.toggle("editing", editing);
  btnCancelar.classList.toggle("hidden", !editing);
  btnAgregar.textContent = editing ? "Guardar" : "Agregar Película";

  if (pelicula) {
    document.getElementById("titulo").value = pelicula.titulo;
    document.getElementById("director").value = pelicula.director;
    document.getElementById("año").value = pelicula.año;
    document.getElementById("genero").value = pelicula.genero;
    document.getElementById("valoracion").value = pelicula.valoracion;
  }
}

function resetForm() {
  formulario.reset();
  setEditMode(false);
  document.getElementById("mensaje-validacion").textContent = "";
}

btnCancelar.addEventListener("click", resetForm);

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

  const pelicula = { titulo, director, año, genero, valoracion: Number(valoracion) };

  if (isEditing && editingIndex !== null) {
    actualizarPelicula(editingIndex, pelicula);
  } else {
    mostrarPeliculas(pelicula);
  }

  resetForm();
});

// 🔧 Solo si el botón es type="button"
document.getElementById("btnAgregar").addEventListener("click", () => {
  formulario.requestSubmit();
});

// Exponer la función para que pueda ser usada desde peliculas.js
window.setEditMode = setEditMode;
