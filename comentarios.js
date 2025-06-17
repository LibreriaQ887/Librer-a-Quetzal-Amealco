document.addEventListener("DOMContentLoaded", function () {
    const formularioComentario = document.getElementById("formularioComentario");
    const contenedorComentarios = document.getElementById("contenedorComentarios");

    const usuario = localStorage.getItem("correoUsuario");
    if (!usuario) {
        formularioComentario.style.display = "none";
    } else {
        formularioComentario.style.display = "block"; 
    }

    formularioComentario.addEventListener("submit", function (event) {
        event.preventDefault();

        let comentario = document.getElementById("comentarioTexto").value;
        if (!comentario) return;

        let nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");
        nuevoComentario.innerHTML = `<strong>${usuario}</strong>: ${comentario} 
            <button onclick="responderComentario(this)">Responder</button>`;

        contenedorComentarios.appendChild(nuevoComentario);

        formularioComentario.reset();
    });
});

function responderComentario(boton) {
    let respuesta = prompt("Tu respuesta:");
    if (respuesta) {
        let respuestaDiv = document.createElement("div");
        respuestaDiv.classList.add("respuesta");
        respuestaDiv.innerHTML = `<strong>Autor:</strong> ${respuesta}`;

        boton.parentElement.appendChild(respuestaDiv);
    }
}

