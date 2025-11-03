import { guardarPeliculas, cargarPeliculas } from './storage.js';

export let peliculasLista = cargarPeliculas();

function mostrarPeliculas(pelicula) {
    peliculasLista.push(pelicula);
    guardarPeliculas(peliculasLista);
    renderizarCatalogo();
}

function actualizarPelicula(index, pelicula) {
    peliculasLista[index] = pelicula;
    guardarPeliculas(peliculasLista);
    renderizarCatalogo();
}

function eliminarPelicula(index) {
    if (confirm('¿Estás seguro de que quieres eliminar esta película?')) {
        peliculasLista.splice(index, 1);
        guardarPeliculas(peliculasLista);
        renderizarCatalogo();
    }
}

function editarPelicula(index) {
    const pelicula = peliculasLista[index];
    window.setEditMode(true, index, pelicula);
    document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

function getStarsRating(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function renderizarCatalogo() {
    const contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = "";

    peliculasLista.forEach((pelicula, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <h3>${pelicula.titulo}</h3>
            <p><strong>Director:</strong> ${pelicula.director}</p>
            <p><strong>Año:</strong> ${pelicula.año}</p>
            <p><strong>Género:</strong> ${pelicula.genero}</p>
            <p><strong>Valoración:</strong> <span class="rating">${getStarsRating(pelicula.valoracion)}</span></p>
            <div class="botones-tarjeta">
                <button class="btn-editar" onclick="window.editarPelicula(${index})">Editar</button>
                <button class="btn-eliminar" onclick="window.eliminarPelicula(${index})">Eliminar</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Renderizar el catálogo cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
});

// Exponer las funciones necesarias al objeto window
window.editarPelicula = editarPelicula;
window.eliminarPelicula = eliminarPelicula;

export { mostrarPeliculas, renderizarCatalogo, actualizarPelicula };