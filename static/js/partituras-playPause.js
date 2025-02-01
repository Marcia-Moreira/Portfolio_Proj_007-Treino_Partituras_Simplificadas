// Controle Play Pause:

const carrossel = document.querySelector('.partituras-carrossel');
let isPlaying = false;

function iniciarCarrossel() {
  if (!isPlaying) {
    isPlaying = true;
    carrossel.setAttribute('data-playing', 'true'); // Marca como "em movimento"
    carrossel.style.animationPlayState = 'running'; // Inicia a animação
  }
}

function pausarCarrossel() {
  if (isPlaying) {
    isPlaying = false;
    carrossel.setAttribute('data-playing', 'false'); // Marca como "pausado"
    carrossel.style.animationPlayState = 'paused'; // Pausa a animação
  }
}

document.getElementById('partituras-play').addEventListener('click', iniciarCarrossel);
document.getElementById('partituras-pause').addEventListener('click', pausarCarrossel);