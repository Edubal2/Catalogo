// Importa la lista de películas y la función para mostrarlas
import { peliculasLista, renderizarCatalogo } from './peliculas.js'; 

const filtroDirectorInput = document.getElementById('filtroDirector');
const filtroGeneroSelect = document.getElementById('filtroGenero');

/**
 * Función central que aplica el filtro por Director y Género.
 */
function filtrarPorCategoriaYDirector() {
    // 1. Obtener valores de los filtros
    const directorFiltrado = filtroDirectorInput.value.toLowerCase().trim();
    const generoFiltrado = filtroGeneroSelect.value; 

    // 2. Aplicar el filtro combinado a la lista de películas
    let listaFiltrada = peliculasLista.filter(pelicula => {
        
        // Criterio 1: Filtrado por Director (busca si INCLUYE el texto)
        const coincideDirector = pelicula.director.toLowerCase().includes(directorFiltrado);
        
        // Criterio 2: Filtrado por Género (match EXACTO, o si es "Todos" (""))
        const coincideGenero = generoFiltrado === "" || pelicula.genero === generoFiltrado;
        
        // La película debe cumplir AMBOS criterios
        return coincideDirector && coincideGenero;
    });

    // 3. Renderizar la lista resultante
    renderizarCatalogo(listaFiltrada);
}


// Listener: Ejecuta la función de filtrado cada vez que cambian los inputs
filtroDirectorInput.addEventListener('input', filtrarPorCategoriaYDirector);
filtroGeneroSelect.addEventListener('change', filtrarPorCategoriaYDirector);

// Nota: Puedes eliminar los listeners y la lógica de 'buscarTitulo', 'btnMejorValoradas' y 'btnLimpiarFiltros' si quieres la versión más simplificada.