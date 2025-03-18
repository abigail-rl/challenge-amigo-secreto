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
    nombreInput.value = '';  

    // Actualizar la lista en la interfaz
    actualizarLista();
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
