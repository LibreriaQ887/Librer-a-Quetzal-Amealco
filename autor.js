document.addEventListener("DOMContentLoaded", function () {
    const formularioComentario = document.getElementById("formularioComentario");
    const contenedorComentarios = document.getElementById("contenedorComentarios");

    // Definir el correo del autor
    const correoAutor = "libreriaquetzal5@gmail.com";

    // Verificar si el usuario ha iniciado sesión
    const usuario = localStorage.getItem("correoUsuario");
    if (!usuario) {
        formularioComentario.style.display = "none"; // Oculta comentarios si no hay sesión
    } else {
        formularioComentario.style.display = "block"; // Muestra comentarios si el usuario está registrado
    }

    formularioComentario.addEventListener("submit", function (event) {
        event.preventDefault();

        let comentario = document.getElementById("comentarioTexto").value;
        if (!comentario) return;

        let nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");
        
        // Si el usuario es el autor, marca el comentario como especial
        if (usuario === correoAutor) {
            nuevoComentario.classList.add("autor");
            nuevoComentario.innerHTML = `<strong>📖 Autor (${usuario})</strong>: ${comentario}`;
        } else {
            nuevoComentario.innerHTML = `<strong>${usuario}</strong>: ${comentario} 
            <button onclick="responderComentario(this)">Responder</button>`;
        }

        contenedorComentarios.appendChild(nuevoComentario);

        formularioComentario.reset();
    });
});
