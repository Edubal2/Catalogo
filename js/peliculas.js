import { initFiltros } from './filtros.js';

let peliculas = [];

function cargarPeliculas() {
  // Aquí se cargan las películas del localStorage o del formulario
  peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
  mostrarPeliculas(peliculas);
  initFiltros(peliculas);
}
