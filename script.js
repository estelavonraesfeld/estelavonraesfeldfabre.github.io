document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("saludoBtn");

    if (boton) {
        boton.addEventListener("click", () => {
            alert("¡Hola, gracias por visitar mi portafolio!");
        });
    }
});

function toggleTexto(boton) {
    const card = boton.closest(".card");
    const textoCompleto = card.querySelector(".completo");

    if (textoCompleto.style.display === "none" || textoCompleto.style.display === "") {
        textoCompleto.style.display = "block";
        boton.innerText = "Leer menos";
    } else {
        textoCompleto.style.display = "none";
        boton.innerText = "Leer más";
    }
}