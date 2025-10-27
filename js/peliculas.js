export let peliculas = [];

// Función para agregar películas al catálogo
export function agregarPelicula(pelicula) {
  peliculas.push(pelicula);
  mostrarPeliculas(peliculas);
}

// Función para mostrar películas en el DOM
export function mostrarPeliculas(lista) {
  const catalogo = document.getElementById('catalogo');
  catalogo.innerHTML = ''; // Limpiar catálogo antes de renderizar

  lista.forEach(p => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.innerHTML = `
      <h3>${p.titulo}</h3>
      <p><strong>Director:</strong> ${p.director}</p>
      <p><strong>Año:</strong> ${p.anio}</p>
      <p><strong>Género:</strong> ${p.genero}</p>
      <p><strong>Valoración:</strong> ${'⭐'.repeat(p.valoracion)}</p>
    `;
    catalogo.appendChild(tarjeta);
  });
}
