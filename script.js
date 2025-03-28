document.getElementById("opencard").addEventListener("click", function () {
    // Ocultar el corazón, el título y la imagen de introducción
    document.getElementById("opencard").style.display = "none";
    document.getElementById("title").style.display = "none";  
    document.getElementById("gifIntro").style.display = "none";  // Ocultar la imagen

    // Mostrar la carta con animación
    document.getElementById("card").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("card").classList.add("card-visible");
    }, 100);
});

document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("card").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");
    
    // Animación para el mensaje de éxito
    setTimeout(() => {
        document.getElementById("successMessage").classList.add("card-visible");
    }, 100);
});

let movedOnce = false;  // Variable para controlar si el botón se movió por primera vez

// Aquí corregimos la sintaxis en el evento de 'mouseover' del botón "No"
document.getElementById("noButton").addEventListener("mouseover", function () {
    const btnNo = document.getElementById("noButton");
    
    // Si el botón no se ha movido antes, se mueve aleatoriamente
    if (!movedOnce) {
        const botonRect = btnNo.getBoundingClientRect();
        const width = window.innerWidth - botonRect.width;
        const height = window.innerHeight - botonRect.height;

        btnNo.style.position = "absolute";  // Mueve el botón "No" de forma independiente
        btnNo.style.left = (Math.random() * width) + "px";
        btnNo.style.top = (Math.random() * height) + "px";

        // Marcar que el botón se ha movido
        movedOnce = true;
    } else {
        // Si ya se movió, lo ponemos en su posición original
        btnNo.style.left = "0px";
        btnNo.style.top = "0px";

        // Restablecer la variable para que se pueda mover aleatoriamente en el siguiente movimiento
        movedOnce = false;
    }
});

