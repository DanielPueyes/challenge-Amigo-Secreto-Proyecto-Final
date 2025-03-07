// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let nombresSorteados = [];

function agregarAmigo() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let nombresDisponibles = nombres.filter(nombre => !nombresSorteados.includes(nombre));
    
    if (nombresDisponibles.length === 0) {
        alert("Todos los nombres han sido sorteados.");
        document.getElementById("resultado").textContent = "Todos los nombres han sido sorteados.";
        document.getElementById("buttonAgregarAmigo").disabled = true;
        document.getElementById("buttonSortearAmigo").disabled = true;
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
    let ganador = nombresDisponibles[indiceAleatorio];
    nombresSorteados.push(ganador);

    let resultado = document.getElementById("resultado");
    resultado.textContent = `🎉¡Felicidades ${ganador} eres el amigo secreto! 🎉`;
    resultado.classList.remove("mostrar");
    setTimeout(() => resultado.classList.add("mostrar"), 100);
    setTimeout(() => lanzarConfetti(), 500);
}
function reiniciarSorteo() {
    nombres = [];
    nombresSorteados = [];
    document.getElementById("resultado").textContent = "";
    document.getElementById("listaNombres").innerHTML = "";
    document.getElementById("buttonAgregarAmigo").disabled = false;
    document.getElementById("buttonSortearAmigo").disabled = false;
}

function lanzarConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const confettiSettings = { target: canvas, max: 200, size: 2, animate: true, props: ["square", "triangle", "line"], colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]] };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear(), 20000);
}