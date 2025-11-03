// Clave para almacenar las películas en localStorage
const STORAGE_KEY = 'peliculas';

// Guardar películas en localStorage
export function guardarPeliculas(peliculas) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(peliculas));
}

// Cargar películas desde localStorage
export function cargarPeliculas() {
    const peliculasGuardadas = localStorage.getItem(STORAGE_KEY);
    return peliculasGuardadas ? JSON.parse(peliculasGuardadas) : [];
}

// Eliminar todas las películas del localStorage
export function limpiarPeliculas() {
    localStorage.removeItem(STORAGE_KEY);
}
