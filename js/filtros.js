import { mostrarPeliculas } from './peliculas.js';

// Cache interna de películas para los filtros
let peliculasCache = [];

// Filtro por director
export function filtroDirector(lista) {
  const filtroElem = document.getElementById('filtroDirector');
  const valor = filtroElem.value.trim().toLowerCase(); // Corregido: solo .value una vez

  if (!valor) {
    mostrarPeliculas(lista); // Si está vacío, mostrar todas
    return;
  }

  // Filtramos lista por director
  const filtradas = lista.filter(p => p.director?.toLowerCase().includes(valor));
  mostrarPeliculas(filtradas);
}

// Filtro por género
export function filtroGenero(lista) {
  const filtroElem = document.getElementById('filtroGenero');
  const valor = filtroElem.value.trim().toLowerCase(); // Corregido: solo .value una vez

  if (!valor) {
    mostrarPeliculas(lista);
    return;
  }

  // Filtramos lista por género
  const filtradas = lista.filter(p => p.genero?.toLowerCase().includes(valor));
  mostrarPeliculas(filtradas);
}

// Inicializar filtros y botones
export function inicializarFiltros(listaPeliculas) {
  // Corregido: Array.isArray en vez de Array.isºArray
  peliculasCache = Array.isArray(listaPeliculas) ? listaPeliculas : [];

  const filtroDirectorElem = document.getElementById('filtroDirector');
  const filtroGeneroElem = document.getElementById('filtroGenero');
  const btnLimpiar = document.getElementById('btnLimpiarFiltros');
  const btnMejorValoradas = document.getElementById('btnMejorValoradas');

  // Eventos independientes
  if (filtroDirectorElem)
    filtroDirectorElem.addEventListener('input', () => filtroDirector(peliculasCache));

  if (filtroGeneroElem)
    filtroGeneroElem.addEventListener('change', () => filtroGenero(peliculasCache));

  // Limpiar filtros
  if (btnLimpiar)
    btnLimpiar.addEventListener('click', () => {
      if (filtroDirectorElem) filtroDirectorElem.value = '';
      if (filtroGeneroElem) filtroGeneroElem.value = '';
      mostrarPeliculas(peliculasCache);
    });

  // Mejor valoradas
  if (btnMejorValoradas)
    btnMejorValoradas.addEventListener('click', () => {
      const ordenadas = [...peliculasCache].sort((a, b) => b.valoracion - a.valoracion);
      mostrarPeliculas(ordenadas);
    });
}

// Actualizar cache interna
export function actualizarCache(nuevaLista) {
  peliculasCache = Array.isArray(nuevaLista) ? nuevaLista : [];
}
