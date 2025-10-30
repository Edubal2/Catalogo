
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