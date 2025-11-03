

// Función que filtra por género
export function filtrarPorGenero(genero) {
  const filtradas = peliculasLista.filter(pelicula => pelicula.genero === genero);
  mostrarPeliculas(filtradas);
}

// Función que filtra por director
export function filtrarPorDirector(director) {
  const filtradas = peliculasLista.filter(pelicula => pelicula.director === director);
  mostrarPeliculas(filtradas);
}

// Listener del botón de filtro por género
document.getElementById('filtroGenero').addEventListener('change', (event) => {
  filtrarPorGenero(event.target.value);
});

// Listener del botón de filtro por director
document.getElementById('filtroDirector').addEventListener('change', (event) => {
  filtrarPorDirector(event.target.value);
});
