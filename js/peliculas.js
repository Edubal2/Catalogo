import { actualizarCache, filtroDirector, filtroGenero } from './filtros.js';

// Variable global (dentro del módulo) que guarda todas las películas cargadas
let peliculas = [];

//Funcion mostrar peliculas

// Si la lista está vacía, muestra un mensaje "No hay resultados".
export function mostrarPeliculas(lista = []) {
// Obtenemos el elemento donde se mostrarán las tarjetas
  const contenedor = document.getElementById('contenedor-peliculas');
//Se limpia el contenido anterior
    contenedor.innerHTML = '';
// Si no hay peliculas muestra mensaje y se sale
    if (lista.length === 0) {
        contenedor.innerHTML = '<p>No hay resultados.</p>';
        return;
    }

// Se recorre la lista y creamos una tarjeta para cada película
  lista.forEach(p => {
    const card = document.createElement('article'); // Cada película será un <article>
    card.className = 'tarjeta-pelicula'; // Clase CSS para estilos

// HTML de cada tarjeta con la información de la película
    card.innerHTML = `
      <h3>${p.titulo}</h3>
      <p><strong>Director:</strong> ${p.director}</p>
      <p><strong>Género:</strong> ${p.genero}</p>
      <p>${'⭐'.repeat(p.valoracion)}</p>
    `;

// Añadimos la tarjeta al contenedor principal
    contenedor.appendChild(card);
  });
}

function iniciarApp() {

    // Obtenemos los elementos del DOM para los filtros
    const filtroDirectorElem = document.getElementById('filtroDirector');
    const filtroGeneroElem = document.getElementById('filtroGenero');

     // Cuando se escribe algo en el filtro de director se aplica el filtro de director
  if (filtroDirectorElem)
    filtroDirectorElem.addEventListener('input', () => filtroDirector(peliculas));

  // Cuando se cambia el género en el <select> se aplica el filtro de género
  if (filtroGeneroElem)
    filtroGeneroElem.addEventListener('change', () => filtroGenero(peliculas));

    mostrarPeliculas(peliculas);
    actualizarCache(peliculas);
}
iniciarApp();
