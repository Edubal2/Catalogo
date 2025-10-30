import { inicializarFiltros } from './filtros.js';

// Lista global
export const peliculas = []; // exportamos const para mantener referencia

// Mostrar películas
export function mostrarPeliculas(lista = []) {
  const contenedor = document.getElementById('contenedor-peliculas');
  contenedor.innerHTML = '';

  if (!lista.length) {
    contenedor.innerHTML = '<p>No hay resultados.</p>';
    return;
  }

  lista.forEach(p => {
    const card = document.createElement('article');
    card.className = 'tarjeta-pelicula';
    card.innerHTML = `
      <h3>${p.titulo}</h3>
      <p><strong>Director:</strong> ${p.director}</p>
      <p><strong>Género:</strong> ${p.genero}</p>
      <p>${'⭐'.repeat(Number(p.valoracion))}</p>
    `;
    contenedor.appendChild(card);
  });

  const contador = document.getElementById('contadorPeliculas');
  if (contador) contador.textContent = `Mostrando ${lista.length} película(s)`;
}

// Función para agregar película sin romper referencia
export function agregarPelicula(pelicula) {
  peliculas.push(pelicula);      // agregamos al array global
  mostrarPeliculas(peliculas);   // actualizamos vista
}

// Iniciar app
export function iniciarApp() {
  // Inicializamos con ejemplo
  peliculas.push(
    { titulo: 'Inception', director: 'Christopher Nolan', genero: 'Ciencia ficción', valoracion: 5 },
    { titulo: 'Titanic', director: 'James Cameron', genero: 'Drama', valoracion: 4 },
    { titulo: 'It', director: 'Andy Muschietti', genero: 'Terror', valoracion: 3 }
  );

  mostrarPeliculas(peliculas);
  inicializarFiltros(peliculas);
}

iniciarApp();
