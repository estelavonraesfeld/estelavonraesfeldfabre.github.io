document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("saludoBtn");

    if (boton) {
        boton.addEventListener("click", () => {
            alert("¡Hola, gracias por visitar mi portafolio!");
        });
    }
});