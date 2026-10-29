const btnSubir = document.getElementById("btnSubir");
const archivo = document.getElementById("archivo");

const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipo");
const tamano = document.getElementById("tamano");
const vistaPrevia = document.getElementById("vistaPrevia");

btnSubir.addEventListener("click", function () {
    archivo.click();
});

archivo.addEventListener("change", function () {
    const file = archivo.files[0];

    if (file) {
        nombre.textContent = "Nombre: " + file.name;
        tipo.textContent = "Tipo: " + file.type;
        tamano.textContent = "Tamaño: " + file.size + " bytes";

        vistaPrevia.src = URL.createObjectURL(file);
        vistaPrevia.style.display = "block";
    }
});
