// Lógica para rolagem automática e controles

// Lógica para rolagem automática e controles
const carrossel = document.querySelector('.partituras-carrossel');
const playButton = document.getElementById('partituras-play');
const pauseButton = document.getElementById('partituras-pause');

playButton.addEventListener('click', () => {
    carrossel.style.animationPlayState = 'running';
});

pauseButton.addEventListener('click', () => {
    carrossel.style.animationPlayState = 'paused';
});