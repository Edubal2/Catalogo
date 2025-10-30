<<<<<<< HEAD

import { mostrarPeliculas, peliculas } from './peliculas.js';

let peliculas = [...peliculas];
let peliculasFiltradas = [...peliculas]; 

//FILTROS VALORACION
// Función que ordena por valoracion descendente
export function verMejorValoradas() {
  const ordenadas = [...peliculasFiltradas].sort((a, b) => b.valoracion - a.valoracion);
  mostrarPeliculas(ordenadas);
}

// Listener del boton mejor valoradas
document.getElementById('btnMejorValoradas').addEventListener('click', verMejorValoradas);

//FILTROS GENERO Y DIRECTOR
//Conecta los filtros del DOM con el js
export function inicializarFiltros (listaPeliculas) {
  //Se guardan las peliculas en la cache local
  peliculas = Array.isºArray(listaPeliculas) ? listaPeliculas : [];
  //Se obtienen los elementos del html para los filtros
  const filtroDirector = document.getElementById('filtroDirector');
  const filtroGenero = document.getElementById('filtroGenero');
  const btnLimpiar = document.getElementById('btnLimpiarFiltros');

  //Cuando el usuario escribe en el filtro de director se filtra inmediatamente
  if (filtroDirector) filtroDirector.addEventListener('input', () => aplicarFiltros(peliculas));

  //Cuando el usuario escribe en el filtro de genero se filtra inmediatamente
  if (filtroGenero) filtroGenero.addEventListener('input', () => aplicarFiltros(peliculas));

  // Si hay botón de “Limpiar filtros”, lo conectamos a su función
  if (btnLimpiar) btnLimpiar.addEventListener('click', limpiarFiltros);
}

//Funcion de filtrar
export function filtroDirector() {
//Se obtienen los valores de los filtros del DOM
  const filtroDirectorElem = document.getElementById('filtroDirector').value.toLowerCase();

  // Convertimos el texto del director a minúsculas para comparar sin distinguir mayúsculas/minúsculas
  const filtroDirector = filtroDirectorElem ? filtroDirectorElem.value.trim().toLowerCase() : '';


  // Si no hay texto, mostramos todas las películas
  if (filtroDirector==='') {
    mostrarPeliculas(peliculasCache);
    return;
  }

  // Creamos una nueva lista filtrada de Director
  const peliculasFiltradas = peliculasCache.filter(pelicula => {
  // Normalizamos los datos de cada película para evitar errores si faltan campos
    const director = pelicula.director ? pelicula.director.toLowerCase() : '';
    return director.includes(filtroDirector);
  });

  mostrarPeliculas(peliculasFiltradas);
}

//Funcion de filtrar
export function filtroGenero() {
//Se obtienen los valores de los filtros del DOM
  const filtroGeneroElem = document.getElementById('filtroGenero').value.toLowerCase();

  // Convertimos el texto del genero a minúsculas para comparar sin distinguir mayúsculas/minúsculas
  const filtroGenero = filtroGeneroElem ? filtroGeneroElem.value.trim().toLowerCase() : '';


  // Si no hay texto, mostramos todas las películas
  if (filtroGenero==='') {
    mostrarPeliculas(peliculasCache);
    return;
  }

  // Creamos una nueva lista filtrada de Genero
  const peliculasFiltradas = peliculasCache.filter(pelicula => {
  // Normalizamos los datos de cada película para evitar errores si faltan campos
    const genero = pelicula.genero ? pelicula.genero.toLowerCase() : '';
    return genero.includes(filtroGenero);
  });

  mostrarPeliculas(peliculasFiltradas);
}

//Funcion para actualizar el cache
export function actualizarCache(nuevaLista) {
  peliculasCache = Array.isArray(nuevaLista) ? nuevaLista : [];
}
=======
// filtros.js
import { mostrarPeliculas, peliculas } from './peliculas.js';

let peliculasFiltradas = [];

export function initFiltros() {
  peliculasFiltradas = [...peliculas];
  mostrarPeliculas(peliculasFiltradas);
  actualizarContador();

  document.getElementById('buscarTitulo').addEventListener('input', aplicarFiltros);
  document.getElementById('filtroDirector').addEventListener('input', aplicarFiltros);
  document.getElementById('filtroGenero').addEventListener('change', aplicarFiltros);
  document.getElementById('btnMejorValoradas').addEventListener('click', verMejorValoradas);
  document.getElementById('btnLimpiarFiltros').addEventListener('click', limpiarFiltros);
}

function aplicarFiltros() {
  const titulo = document.getElementById('buscarTitulo').value.toLowerCase();
  const director = document.getElementById('filtroDirector').value.toLowerCase();
  const genero = document.getElementById('filtroGenero').value;

  peliculasFiltradas = peliculas.filter(p => {
    const coincideTitulo = p.titulo.toLowerCase().includes(titulo);
    const coincideDirector = p.director.toLowerCase().includes(director);
    const coincideGenero = genero === '' || p.genero === genero;
    return coincideTitulo && coincideDirector && coincideGenero;
  });

  mostrarPeliculas(peliculasFiltradas);
  actualizarContador();
}

function verMejorValoradas() {
  const ordenadas = [...peliculasFiltradas].sort((a, b) => b.valoracion - a.valoracion);
  mostrarPeliculas(ordenadas);
  actualizarContador(ordenadas.length);
}

function limpiarFiltros() {
  document.getElementById('buscarTitulo').value = '';
  document.getElementById('filtroDirector').value = '';
  document.getElementById('filtroGenero').value = '';
  peliculasFiltradas = [...peliculas];
  mostrarPeliculas(peliculasFiltradas);
  actualizarContador();
}

function actualizarContador(total = peliculasFiltradas.length) {
  document.getElementById('contadorPeliculas').textContent =
    `Mostrando ${total} película(s)`;
}

// Inicializamos los filtros al cargar la página
initFiltros();
>>>>>>> origin/Dani
