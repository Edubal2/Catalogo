// filtros.js

// Importa la lista de películas y la función para mostrarlas
import { peliculasLista, renderizarCatalogo } from './peliculas.js'; 

const buscarTituloInput = document.getElementById('buscarTitulo');
const filtroDirectorInput = document.getElementById('filtroDirector');
const filtroGeneroSelect = document.getElementById('filtroGenero');

/**
 * Función central que aplica los filtros por Título, Director y Género, 
 * solo si los campos tienen valor.
 */
function filtrarCatalogo() {
    // 1. Obtener y normalizar valores de los filtros
    const tituloBuscado = buscarTituloInput.value.toLowerCase().trim();
    const directorFiltrado = filtroDirectorInput.value.toLowerCase().trim();
    const generoFiltrado = filtroGeneroSelect.value; 

    // 2. Aplicar el filtro a la lista de películas
    let listaFiltrada = peliculasLista.filter(pelicula => {
        
        // Criterio A: Título. Si el campo está vacío, la condición es TRUE (siempre pasa).
        const cumpleTitulo = tituloBuscado === '' || pelicula.titulo.toLowerCase().includes(tituloBuscado);
        
        // Criterio B: Director. Si el campo está vacío, la condición es TRUE (siempre pasa).
        const cumpleDirector = directorFiltrado === '' || pelicula.director.toLowerCase().includes(directorFiltrado);
        
        // Criterio C: Género. Si el select es "Todos los géneros" (""), la condición es TRUE (siempre pasa).
        const cumpleGenero = generoFiltrado === '' || pelicula.genero === generoFiltrado;
        
        // La película se incluye si cumple todos los criterios ACTIVOS.
        // Si el usuario solo escribió el director, solo se aplica el Criterio B (A y C pasan automáticamente).
        return cumpleTitulo && cumpleDirector && cumpleGenero;
    });

    // 3. Renderizar la lista resultante
    renderizarCatalogo(listaFiltrada);
}


// Listener: Ejecuta la función de filtrado cada vez que cambian los inputs
buscarTituloInput.addEventListener('input', filtrarCatalogo);
filtroDirectorInput.addEventListener('input', filtrarCatalogo);
filtroGeneroSelect.addEventListener('change', filtrarCatalogo);

// --- La lógica para 'verMejorValoradas' y 'limpiarFiltros' debe usar la función 'filtrarCatalogo' como base ---

function verMejorValoradas() {
    // Primero, obtenemos la lista aplicando los filtros actuales
    const listaParaOrdenar = peliculasLista.filter(pelicula => {
        const tituloBuscado = buscarTituloInput.value.toLowerCase().trim();
        const directorFiltrado = filtroDirectorInput.value.toLowerCase().trim();
        const generoFiltrado = filtroGeneroSelect.value;
        
        const cumpleTitulo = tituloBuscado === '' || pelicula.titulo.toLowerCase().includes(tituloBuscado);
        const cumpleDirector = directorFiltrado === '' || pelicula.director.toLowerCase().includes(directorFiltrado);
        const cumpleGenero = generoFiltrado === '' || pelicula.genero === generoFiltrado;
        
        return cumpleTitulo && cumpleDirector && cumpleGenero;
    });
    
    // Luego ordenamos y renderizamos
    const ordenadas = listaParaOrdenar.sort((a, b) => b.valoracion - a.valoracion);
    renderizarCatalogo(ordenadas);
}

document.getElementById('btnMejorValoradas').addEventListener('click', verMejorValoradas);

function limpiarFiltros() {
    buscarTituloInput.value = "";
    filtroDirectorInput.value = "";
    filtroGeneroSelect.value = ""; 
    filtrarCatalogo(); // Vuelve a renderizar la lista completa
}

document.getElementById('btnLimpiarFiltros').addEventListener('click', limpiarFiltros);