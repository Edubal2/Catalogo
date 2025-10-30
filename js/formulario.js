
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const director = document.getElementById("director").value;
    const año = document.getElementById("año").value;
    const genero = document.getElementById("genero").value;
    const valoracion = document.getElementById("valoracion").value;
})

const nuevaPelicula = { titulo, director, año, genero, valoracion };
