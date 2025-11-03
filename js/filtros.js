import { peliculasLista, renderizarCatalogo } from './peliculas.js';

let peliculasFiltradas = [...peliculasLista];

// Referencias a elementos del DOM
const inputTitulo = document.getElementById('buscarTitulo');
const inputDirector = document.getElementById('filtroDirector');
const selectGenero = document.getElementById('filtroGenero');
const contador = document.getElementById('contadorPeliculas');
const btnLimpiar = document.getElementById('btnLimpiarFiltros');
const btnMejorValoradas = document.getElementById('btnMejorValoradas');

// --- Función principal de filtrado ---
function aplicarFiltros() {
  const tituloFiltro = inputTitulo.value.toLowerCase();
  const directorFiltro = inputDirector.value.toLowerCase();
  const generoFiltro = selectGenero.value;

  peliculasFiltradas = peliculasLista.filter((p) => {
    const coincideTitulo = p.titulo.toLowerCase().includes(tituloFiltro);
    const coincideDirector = p.director.toLowerCase().includes(directorFiltro);
    const coincideGenero = generoFiltro ? p.genero === generoFiltro : true;
    return coincideTitulo && coincideDirector && coincideGenero;
  });

  renderizarPeliculasFiltradas();
}

// --- Renderizar las películas filtradas ---
function renderizarPeliculasFiltradas() {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = '';

  peliculasFiltradas.forEach((pelicula, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.innerHTML = `
      <h3>${pelicula.titulo}</h3>
      <p><strong>Director:</strong> ${pelicula.director}</p>
      <p><strong>Año:</strong> ${pelicula.año}</p>
      <p><strong>Género:</strong> ${pelicula.genero}</p>
      <p><strong>Valoración:</strong> ${pelicula.valoracion}</p>
      <div class="botones-tarjeta">
        <button class="btn-editar" onclick="window.editarPelicula(${index})">Editar</button>
        <button class="btn-eliminar" onclick="window.eliminarPelicula(${index})">Eliminar</button>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });

  contador.textContent = `Mostrando ${peliculasFiltradas.length} película(s)`;
}

// --- Botón "Ver mejor valoradas" ---
btnMejorValoradas.addEventListener('click', () => {
  peliculasFiltradas = [...peliculasFiltradas].sort((a, b) => b.valoracion - a.valoracion);
  renderizarPeliculasFiltradas();
});

// --- Botón "Limpiar filtros" ---
btnLimpiar.addEventListener('click', () => {
  inputTitulo.value = '';
  inputDirector.value = '';
  selectGenero.value = '';
  peliculasFiltradas = [...peliculasLista];
  renderizarPeliculasFiltradas();
});

// --- Listeners ---
inputTitulo.addEventListener('input', aplicarFiltros);
inputDirector.addEventListener('input', aplicarFiltros);
selectGenero.addEventListener('change', aplicarFiltros);

// --- Inicializar ---
document.addEventListener('DOMContentLoaded', () => {
  peliculasFiltradas = [...peliculasLista];
  renderizarPeliculasFiltradas();
});
