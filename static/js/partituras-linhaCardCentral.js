// Linha do Card Central:

// Observa o movimento do carrossel para verificar o card central
//! Ainda não consegui identificar para corrigir ou aprovar

const areaCentral = document.getElementById('area-central');
const cards = document.querySelectorAll('.card-container');
let ultimoAcordeReproduzido = null; // Evita repetição do áudio

function verificarCardCentral() {
  // const rectAreaCentral = areaCentral.getBoundingClientRect();
  // const centroTela = rectAreaCentral.left + rectAreaCentral.width / 2;
  const centroTela = window.innerWidth / 2; // Calcula o centro do viewport

  cards.forEach(card => {
    const rectCard = card.getBoundingClientRect();
    const centroCard = rectCard.left + rectCard.width / 2;

    // Margem para a fala (maior que a margem de destaque)
    const margemFala = 50; // Ajuste conforme necessário
    const margemDestaque = 90; // Margem para mudança de cor

    // const acorde = card.querySelector('.card-acorde').getAttribute('data-acorde');

    // Verifica se o centro do card está na área central
    const acorde = card.querySelector('.talk-chord').textContent; // Lê o conteúdo do campo talk-chord

      // Reproduz o áudio apenas se for um acorde novo mesmo que igual ao anterior:
      if (acorde !== ultimoAcordeReproduzido) {
        if (centroCard >= centroTela - margemFala && centroCard <= centroTela + margemFala + 50) {
          reproduzirAudio(acorde);
          ultimoAcordeReproduzido = acorde; // Atualiza o último acorde reproduzido
        }
      }

      // Verifica se o card está na área central para destacá-lo
      if (centroCard >= centroTela - margemDestaque && centroCard <= centroTela + margemDestaque) {
        card.style.opacity = '1'; // Destaca o card
      } else {
        card.style.opacity = '0.6'; // Esmaece os cards laterais
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


// =================================
