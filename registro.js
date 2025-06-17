
document.getElementById("formularioRegistro").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let correoUsuario = document.getElementById("correoUsuario").value;
    if (!correoUsuario) return;

    localStorage.setItem("correoUsuario", correoUsuario);
    alert("¡Registro exitoso! Ahora puedes comentar.");
    
    document.getElementById("registroPopupContainer").style.display = "none";

    
    document.getElementById("comentarios").style.display = "block";
});

document.getElementById("cerrarSesion").addEventListener("click", function () {
    localStorage.removeItem("correoUsuario");
    location.reload(); 
});
