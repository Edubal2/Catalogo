<form id="formulario">
    
    <label for="titulo">Titulo:</label>
    <input type="text" id="titulo" name="titulo" required/>

    <label for="director">Director:</label>
    <input id="director" name="director" required></input>

    <label for="año">Año de publicación</label>
    <input type="number" id="año" name="año" required/>

    <label for="genero">Género:</label>
    <input type="text" id="genero" name="genero" required/>

    <label for="valoracion">Valoración</label>
    <input type="number" id="valoracion" name="valoracion" min="1" max="5" required/>

    <button type="submit">Enviar</button>


</form>

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const director = document.getElementById("director").value;
    const año = document.getElementById("año").value;
    const genero = document.getElementById("genero").value;
    const valoracion = document.getElementById("valoracion").value;
})

