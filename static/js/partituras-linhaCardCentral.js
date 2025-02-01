// Linha do Card Central:


// Observa o movimento do carrossel para verificar o card central
//! Ainda não consegui identificar para corrigir ou aprovar
setInterval(verificarCardCentral, 100);

// CODIGO PARA VERIFICAR A LINHA CENTRAL DA PÁGINA FORA DO CARROSSEL!!!

const areaCentral = document.getElementById('area-central');
const cards = document.querySelectorAll('.card-container');

function verificarCardCentral() {
  const rectAreaCentral = areaCentral.getBoundingClientRect();
  const centroTela = rectAreaCentral.left + rectAreaCentral.width / 2;

  cards.forEach(card => {
    const rectCard = card.getBoundingClientRect();
    const centroCard = rectCard.left + rectCard.width / 2;

    // Verifica se o centro do card está na área central
    if (centroCard >= centroTela - 10 && centroCard <= centroTela + 10) {
      card.style.opacity = '1'; // Destaca o card
      const acorde = card.querySelector('.card-acorde').getAttribute('data-acorde');
      reproduzirAudio(acorde); // Reproduz o áudio do acorde
    } else {
      card.style.opacity = '0.5'; // Esmaece os cards laterais
    }
  });
}

// Observa o movimento do carrossel para verificar o card central
setInterval(verificarCardCentral, 100);