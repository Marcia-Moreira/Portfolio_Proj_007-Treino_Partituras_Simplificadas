// Lógica para rolagem automática e controles

// Lógica para rolagem automática e controles
// const carrossel = document.querySelector('.partituras-carrossel');
// const playButton = document.getElementById('partituras-play');
// const pauseButton = document.getElementById('partituras-pause');

// playButton.addEventListener('click', () => {
//     carrossel.style.animationPlayState = 'running';
// });

// pauseButton.addEventListener('click', () => {
//     carrossel.style.animationPlayState = 'paused';
// });

//? CÓDIGO PARA MOVIMENTO DO CARROSSEL:
// partituras-treinoCarrossel.js
// Velocidades: 1, 3 e 5.

const carrossel = document.querySelector('.partituras-carrossel');
const cards = document.querySelectorAll('.card-container');
let isPlaying = false;
let velocidade = 3; // Velocidade padrão (média)
let intervalo;

// Função para mover o carrossel
function moverCarrossel() {
  const primeiroCard = carrossel.firstElementChild;
  const larguraCard = primeiroCard.offsetWidth;

  // Move o primeiro card para o final do carrossel
  //! Rever esse fluxo pois deve ser continuo
  carrossel.style.transition = 'transform 0.5s linear';
  carrossel.style.transform = `translateX(-${larguraCard}px)`;

  // Quando a transição terminar, move o card para o final
  // ! Acho que não deve ser assim, deve ser contínuo... fluído e quando chegar no último da lista deve parar de fato até que se aperte play novamente ou feche a tela pra escolher outro
  carrossel.addEventListener('transitionend', () => {
    carrossel.style.transition = 'none';
    carrossel.style.transform = 'translateX(0)';
    carrossel.appendChild(primeiroCard);
  }, { once: true });
}

//* ERRO Função para iniciar o carrossel - Play
//! Os cards precisam sumir, e ao apertar o play, aparece o primeiro da lista, surgindo à direita e os demais na fila até o fim da tela a esquerda, de forma contínua, Está cortando, começando no lugar errado... bem estranho.
function iniciarCarrossel() {
  if (!isPlaying) {
    isPlaying = true;
    intervalo = setInterval(moverCarrossel, 1000 / velocidade);
  }
}

//* OK Função para pausar o carrossel - Pause
//! Está funcionando muito bem!
function pausarCarrossel() {
  if (isPlaying) {
    isPlaying = false;
    clearInterval(intervalo);
  }
}

// Eventos dos botões de Play/Pause
document.getElementById('partituras-play').addEventListener('click', iniciarCarrossel);
document.getElementById('partituras-pause').addEventListener('click', pausarCarrossel);

//? CÓDIGO PARA VELOCIDADE DO CARROSSEL:
// partituras-treinoCarrossel.js
// Função para alterar a velocidade
function alterarVelocidade(novaVelocidade) {
    velocidade = novaVelocidade;
    if (isPlaying) {
      pausarCarrossel();
      iniciarCarrossel();
    }
  }
  
  // Eventos dos botões de velocidade
  //! Mudei os números para 1, 3 e 5!!!
  document.getElementById('partituras-velocidade-devagar').addEventListener('click', () => alterarVelocidade(1)); // Lento
  document.getElementById('partituras-velocidade-medio').addEventListener('click', () => alterarVelocidade(3)); // Médio
  document.getElementById('partituras-velocidade-rapido').addEventListener('click', () => alterarVelocidade(5)); // Rápido


//? CÓDIGO PARA SOM/VOZ NO CARROSSEL:
// partituras-treinoCarrossel.js

// const audioAtivo = true; // Por padrão, o áudio está ativo
//! Mas está falando só o mesmo acorde o tempo todo logo que carrega a tela sem apertar o play!!!! Deve estar Ativo apenas se apertar o PLAY
//! Aperto o botão de som ativo ou não e não funciona nada.


//! SEPAREI OUTRA VERSÃO DESSE CODIGO:
// Função para reproduzir o áudio do acorde
// function reproduzirAudio(acorde) {
  //! Se audio Ativo e Play Ativo!!!!
  // if (audioAtivo) {
    //! Preciso desconbrir o que ele está lendo!!! e quando, pois precisamos ler só quem aparece/passa ao centro da página!!!
    // const utterance = new SpeechSynthesisUtterance(acorde);
    // speechSynthesis.speak(utterance);
//   }
// }

//! TEM OUTRO CODIGO VERIFICAR COMO EXCLUIR ESSE TRECHO!!!!
// Verifica quando um card entra na área central
//! Não consegui identificar essa área central x voz falada. Vamos fazer um css para sombrear essa área central?
// function verificarCardCentral() {
//   const cards = document.querySelectorAll('.card-container');
//   cards.forEach(card => {
//     const rect = card.getBoundingClientRect();
//     const centroTela = window.innerWidth / 2;

    // Verifica se o card está na área central
    // if (rect.left <= centroTela && rect.right >= centroTela) {
    //   card.style.opacity = '1'; // Destaca o card
    //   const acorde = card.querySelector('.card-acorde').getAttribute('data-acorde');
    //   reproduzirAudio(acorde);
    // } else {
    //   card.style.opacity = '0.5'; // Esmaece os cards laterais
  //   }
  // });
// }
