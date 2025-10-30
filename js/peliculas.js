// peliculas.js — módulo principal para manejar el catálogo de películas

// Importamos funciones desde filtros.js
import { actualizarCache, inicializarFiltros } from './filtros.js';

// ✅ Lista global de películas, exportada para otros módulos
export let peliculas = [];

// Función para mostrar películas en pantalla
export function mostrarPeliculas(lista = []) {
  const contenedor = document.getElementById('contenedor-peliculas');
  contenedor.innerHTML = ''; // Limpiamos contenido previo

  // Si la lista está vacía, mostramos mensaje
  if (!lista.length) {
    contenedor.innerHTML = '<p>No hay resultados.</p>';
    return;
  }

  // Creamos tarjetas de películas
  lista.forEach(p => {
    const card = document.createElement('article');
    card.className = 'tarjeta-pelicula';

    // Repetimos estrellas según la valoración (convertimos a número)
    card.innerHTML = `
      <h3>${p.titulo}</h3>
      <p><strong>Director:</strong> ${p.director}</p>
      <p><strong>Género:</strong> ${p.genero}</p>
      <p>${'⭐'.repeat(Number(p.valoracion))}</p>
    `;
    contenedor.appendChild(card);
  });

  //Actualizamos el contador de películas
  const contador = document.getElementById('contadorPeliculas');
  if (contador) contador.textContent = `Mostrando ${lista.length} película(s)`;
}

// Función para iniciar la app
export function iniciarApp() {
  //Lista inicial de ejemplo
  peliculas = [
    { titulo: 'Inception', director: 'Christopher Nolan', genero: 'Ciencia ficción', valoracion: 5 },
    { titulo: 'Titanic', director: 'James Cameron', genero: 'Drama', valoracion: 4 },
    { titulo: 'It', director: 'Andy Muschietti', genero: 'Terror', valoracion: 3 },
  ];

  mostrarPeliculas(peliculas); // Mostramos todas al inicio

// Inicializamos filtros
  inicializarFiltros(peliculas);

//Actualizamos cache interna de filtros.js
  actualizarCache(peliculas);
}

// Ejecutamos la app automáticamente
iniciarApp();
