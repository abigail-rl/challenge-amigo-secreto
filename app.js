// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los amigos
let listaDeNombres = [];

// Función para capturar amigos
function agregarAmigo() {
    let nombreInput = document.getElementById('amigo'); // Obtener el input
    let nombre = nombreInput.value.trim(); // Capturar y limpiar espacios
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    } 
    // Agregar nombre a la lista de nombres
    listaDeNombres.push(nombre);
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";
    // Actualizar la lista en la interfaz
    actualizarLista();
    actualizarEstadoBoton();
    // Limpiar mensaje de error si hay amigos disponibles
    document.getElementById('resultado').innerHTML = "";
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById('listaAmigos'); // Obtener el <ul>
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    // Recorrer el array y crear elementos <li>
    for (let i = 0; i < listaDeNombres.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = listaDeNombres[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar <li> a la lista
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    console.log("✅ Botón presionado, ejecutando sorteo...");

    let resultado = document.getElementById('resultado');

    if (!resultado) {
        console.log("❌ ERROR: No se encontró el elemento 'resultado'");
        return;
    }

    if (listaDeNombres.length === 0) {
        console.log("⚠️ No hay amigos para sortear, mostrando mensaje...");
        resultado.innerHTML = "<span class='mensaje-error'>❌ ¡No hay amigos para sortear! ❌</span>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
    let nombreSorteado = listaDeNombres.splice(indiceAleatorio, 1)[0];

    resultado.innerHTML = `🎉 ${nombreSorteado} 🎉`;
    console.log(`🎯 Se sorteó a: ${nombreSorteado}`);

    actualizarLista();
    actualizarEstadoBoton();
}


// Función para actualizar el estado del botón de sorteo
function actualizarEstadoBoton() {
    let botonSortear = document.getElementById('botonSortear');
    botonSortear.disabled = listaDeNombres.length === 0;
}

// Deshabilitar el botón al inicio
document.addEventListener("DOMContentLoaded", () => {
    actualizarEstadoBoton();
});
