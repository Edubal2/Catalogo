// filtros.js
import { peliculasLista, renderizarCatalogo } from './peliculas.js';

// --- Elementos de Filtro ---
const buscarTituloInput = document.getElementById('buscarTitulo');
const filtroDirectorInput = document.getElementById('filtroDirector');
const filtroGeneroSelect = document.getElementById('filtroGenero');
const btnMejorValoradas = document.getElementById('btnMejorValoradas');
const btnLimpiarFiltros = document.getElementById('btnLimpiarFiltros');

/**
 * Función central que aplica todos los filtros activos (Título, Director, Género).
 * La filtración se aplica si el campo *no está vacío*.
 */
function filtrarCatalogo() {
    // 1. Obtener y normalizar valores de los filtros
    const tituloBuscado = buscarTituloInput.value.toLowerCase().trim();
    const directorFiltrado = filtroDirectorInput.value.toLowerCase().trim();
    const generoFiltrado = filtroGeneroSelect.value; 

    // 2. Aplicar el filtro a la lista completa
    let listaFiltrada = peliculasLista.filter(pelicula => {
        
        // Criterio 1: Título (filtrado en tiempo real al escribir)
        // Pasa si el campo de búsqueda está vacío O si el título incluye el texto
        const cumpleTitulo = tituloBuscado === '' || pelicula.titulo.toLowerCase().includes(tituloBuscado);
        
        // Criterio 2: Director (filtrado en tiempo real al escribir)
        // Pasa si el campo de director está vacío O si el director incluye el texto
        const cumpleDirector = directorFiltrado === '' || pelicula.director.toLowerCase().includes(directorFiltrado);
        
        // Criterio 3: Género (filtrado al cambiar el desplegable)
        // Pasa si el selector es 'Todos los géneros' ("") O si el género coincide exactamente
        const cumpleGenero = generoFiltrado === '' || pelicula.genero === generoFiltrado;
        
        // La película se muestra solo si cumple con TODOS los criterios activos
        return cumpleTitulo && cumpleDirector && cumpleGenero;
    });

    // 3. Renderizar la lista resultante
    renderizarCatalogo(listaFiltrada);
}

/**
 * Ordena la lista de películas *actualmente filtrada* por valoración de forma descendente.
 */
function verMejorValoradas() {
    // 1. Ejecutar filtrarCatalogo() para obtener la lista actual (ya filtrada)
    const tituloBuscado = buscarTituloInput.value.toLowerCase().trim();
    const directorFiltrado = filtroDirectorInput.value.toLowerCase().trim();
    const generoFiltrado = filtroGeneroSelect.value;
    
    let listaParaOrdenar = peliculasLista.filter(pelicula => {
        const cumpleTitulo = tituloBuscado === '' || pelicula.titulo.toLowerCase().includes(tituloBuscado);
        const cumpleDirector = directorFiltrado === '' || pelicula.director.toLowerCase().includes(directorFiltrado);
        const cumpleGenero = generoFiltrado === '' || pelicula.genero === generoFiltrado;
        return cumpleTitulo && cumpleDirector && cumpleGenero;
    });
    
    // 2. Ordenar y renderizar
    const ordenadas = listaParaOrdenar.sort((a, b) => b.valoracion - a.valoracion);
    renderizarCatalogo(ordenadas);
}

/**
 * Limpia todos los campos de filtro y reinicia el catálogo.
 */
function limpiarFiltros() {
    buscarTituloInput.value = "";
    filtroDirectorInput.value = "";
    filtroGeneroSelect.value = ""; 
    filtrarCatalogo(); // Muestra la lista completa
}


// --- LISTENERS PARA ACTIVACIÓN EN TIEMPO REAL ---

// El evento 'input' se dispara inmediatamente al escribir o borrar.
buscarTituloInput.addEventListener('input', filtrarCatalogo);
filtroDirectorInput.addEventListener('input', filtrarCatalogo);

// El evento 'change' se dispara cuando el valor de un select cambia.
filtroGeneroSelect.addEventListener('change', filtrarCatalogo);

// Listener para los botones
btnMejorValoradas.addEventListener('click', verMejorValoradas);
btnLimpiarFiltros.addEventListener('click', limpiarFiltros);