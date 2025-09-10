// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Ingrese un nombre por favor");
    return;
  }

  amigos.push(nombre);
  input.value = ""; 
  mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía, no se puede sortear");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let resultado = amigos[indice];
  document.getElementById("resultado").innerText = 
    "El amigo secreto es: " + resultado;
}