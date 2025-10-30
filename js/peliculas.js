let peliculas=[];

function mostrarPeliculas(pelicula){
    peliculas.push(pelicula);
   renderizarCatalogo(); 
}

function renderizarCatalogo() {
    const contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = "";

        peliculas.forEach(function(pelicula) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
                tarjeta.innerHTML = `
                <h3>${pelicula.titulo}</h3>
                <p><strong>Director:</strong> ${pelicula.director}</p>
                <p><strong>Año:</strong> ${pelicula.año}</p>
                <p><strong>Género:</strong> ${pelicula.genero}</p>
                <p><strong>Valoración:</strong> ${pelicula.valoracion}</p>
                `;
            contenedor.appendChild(tarjeta);
        });
}

export { mostrarPeliculas };