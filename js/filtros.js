/*
Filtros por género y director siendo el filtro de generos mediante un desplegable que ya existe y el de director mediante un campo de texto.
*/
import { peliculasLista, renderizarCatalogo } from './peliculas.js';

export function filtrarPeliculas() {
    const generoFiltro = document.getElementById('filtro-genero').value.toLowerCase();
    const directorFiltro = document.getElementById('filtro-director').value.toLowerCase();

    const peliculasFiltradas = peliculasLista.filter(pelicula => {
        const coincideGenero = generoFiltro === 'todos' || pelicula.genero.toLowerCase() === generoFiltro;
        const coincideDirector = pelicula.director.toLowerCase().includes(directorFiltro);
        return coincideGenero && coincideDirector;
    });

    renderizarCatalogoFiltrado(peliculasFiltradas);
}

function renderizarCatalogoFiltrado(peliculas) {
    const contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = "";

    peliculas.forEach((pelicula, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML   = `
            <h3>${pelicula.titulo}</h3>
            <p><strong>Director:</strong> ${pelicula.director}</p>
            <p><strong>Año:</strong> ${pelicula.año}</p>
            <p><strong>Género:</strong> ${pelicula.genero}</p>
            <p><strong>Valoración:</strong> ${pelicula.valoracion}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Agregar event listeners a los filtros
document.getElementById('filtro-genero').addEventListener('change', filtrarPeliculas);
document.getElementById('filtro-director').addEventListener('input', filtrarPeliculas);

// Renderizar el catálogo completo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
}); 
