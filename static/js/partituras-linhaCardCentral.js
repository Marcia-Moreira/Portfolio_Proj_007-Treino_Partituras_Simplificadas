// Linha do Card Central:
// partituras-linhaCardCentral.js

// Observa o movimento do carrossel para verificar o card central
const areaCentral = document.getElementById('area-central');
const cards = document.querySelectorAll('.card-container');
let ultimoAcordeReproduzido = null; // Evita repetição do áudio

function calcularCentroTela() {
    const centroX = window.visualViewport.width / 2;
    return centroX; // Retorna apenas o centro horizontal (X)
}

function verificarCardCentral() {
    const centroTela = calcularCentroTela(); // Calcula o centro da tela

    cards.forEach(card => {
        const rectCard = card.getBoundingClientRect();
        const centroCard = rectCard.left + rectCard.width / 2;

        // Margem para a fala (maior que a margem de destaque)
        const margemFala = 90; // Ajuste conforme necessário
        const margemDestaque = 95; // Margem para mudança de cor

        // Verifica se o centro do card está na área central
        const acorde = card.querySelector('.talk-chord').textContent; // Lê o conteúdo do campo talk-chord

        // Reproduz o áudio apenas se for um acorde novo, mesmo que igual ao anterior:
        if (acorde !== ultimoAcordeReproduzido) {
            if (centroCard >= centroTela - margemFala && centroCard <= centroTela + margemFala) {
                reproduzirAudio(acorde);
                ultimoAcordeReproduzido = acorde; // Atualiza o último acorde reproduzido
            }
        }

        // Verifica se o card está na área central para destacá-lo
        if (centroCard >= centroTela - margemDestaque && centroCard <= centroTela + margemDestaque) {
            card.style.opacity = '1';// Destaca o card
            card.style.backgroundColor = 'rgb(49, 101, 56)'; // Altera a cor de fundo
        } else {
            card.style.opacity = '0.6'; // Esmaece os cards laterais
            card.style.backgroundColor = ''; // Remove a cor de fundo (volta ao padrão)
        }
    });
}

function reproduzirAudio(acorde) {
    if (audioAtivo && isPlaying) {
        const utterance = new SpeechSynthesisUtterance(acorde);
        utterance.lang = 'pt-BR'; // Define o idioma para português
        utterance.rate = 1; // Velocidade da fala (1 = normal)
        utterance.pitch = 1; // Tom da voz (1 = normal)
        speechSynthesis.speak(utterance);
    }
}

// Observa o movimento do carrossel para verificar o card central
setInterval(verificarCardCentral, 100);