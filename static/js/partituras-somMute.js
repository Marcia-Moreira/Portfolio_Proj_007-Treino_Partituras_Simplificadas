// partituras-somMute.js

let audioAtivo = true; // Variável global para controlar o estado do áudio

function alternarSom() {
    audioAtivo = !audioAtivo; // Alterna entre true e false
    const botaoSom = document.getElementById('partituras-som');
    
    // Altera o ícone do botão
    if (audioAtivo) {
        botaoSom.innerHTML = '🔊 <span>Som</span>'; // Ícone de som ligado
        botaoSom.classList.remove('botao-ativo'); 
    } else {
        botaoSom.innerHTML = '🔇 <span>Som</span>'; // Ícone de som mudo
        marcarBotaoAtivo(botaoSom); // Ativa o destaque
    }
}