// Controle Play Pause:
// partituras-playPause.js
const carrossel = document.querySelector('.partituras-carrossel');
const botaoPlayPause = document.getElementById('partituras-playPause'); // Novo botão único
let isPlaying = false;

// Função para alternar entre Play e Pause
function alternarCarrossel() {
    isPlaying = !isPlaying; // Alterna entre ligado/desligado

    if (isPlaying) {
        carrossel.setAttribute('data-playing', 'true'); // Marca como "em movimento"
        carrossel.style.animationPlayState = 'running'; // Inicia a animação 
        // Muda o texto e imagem do botão
        botaoPlayPause.innerHTML = '⏸️ <span>Pause</span>';
        marcarBotaoAtivo(botaoPlayPause); // Ativa o destaque
    } else {
        carrossel.setAttribute('data-playing', 'false'); // Marca como "pausado"
        carrossel.style.animationPlayState = 'paused'; // Pausa a animação
        // Muda o texto e imagem do botão
        botaoPlayPause.innerHTML = '▶️ <span>Play</span>';
        // botaoPlayPause.classList.remove('botao-ativo'); 
        // Remove destaque quando pausado
    }
}

// Evento de clique no botão
botaoPlayPause.addEventListener('click', alternarCarrossel);