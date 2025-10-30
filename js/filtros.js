import { mostrarPeliculas, peliculas } from './peliculas.js';

let peliculasFiltradas = [...peliculas]; 

// Función que ordena por valoracion descendente
export function verMejorValoradas() {
  const ordenadas = [...peliculasFiltradas].sort((a, b) => b.valoracion - a.valoracion);
  mostrarPeliculas(ordenadas);
}

// Listener del boton mejor valoradas
document.getElementById('btnMejorValoradas').addEventListener('click', verMejorValoradas);
