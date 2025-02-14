// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo;

function agregarAmigo() {
   let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Campo sin llenar, Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo)
        document.querySelector("#amigo").value = "";
        mostrarListaAmigo();
    

    }

}

/**
 * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
let resultadoHTML = document.querySelector("#resultado");

function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
function limpiarLista(){
    amigos = [];
    mostrarListaAmigo()
    resultadoHTML.innerHTML = "";
}
