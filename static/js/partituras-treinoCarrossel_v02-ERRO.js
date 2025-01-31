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
  //* SOLUÇÃO: Vamos remover a transição e usar uma animação contínua.
  carrossel.style.transition = 'none'; // Remove a transição para evitar "pulos"
  carrossel.style.transform = `translateX(-${larguraCard}px)`;

  // Quando o movimento terminar, move o card para o final
  //! Acho que não deve ser assim, deve ser contínuo... fluído e quando chegar no último da lista deve parar de fato até que se aperte play novamente ou feche a tela pra escolher outro
  //* SOLUÇÃO: Vamos usar um loop infinito, mas com uma verificação para parar no último card.
  carrossel.addEventListener('transitionend', () => {
    carrossel.appendChild(primeiroCard);
    carrossel.style.transition = 'none';
    carrossel.style.transform = 'translateX(0)';
    setTimeout(() => {
      carrossel.style.transition = 'transform 0.5s linear';
    }, 10); // Pequeno delay para reiniciar a transição
  }, { once: true });
}

//* ERRO Função para iniciar o carrossel - Play
//! Os cards precisam sumir, e ao apertar o play, aparece o primeiro da lista, surgindo à direita e os demais na fila até o fim da tela a esquerda, de forma contínua, Está cortando, começando no lugar errado... bem estranho.
//* SOLUÇÃO: Vamos reiniciar a posição do carrossel ao iniciar o play.
function iniciarCarrossel() {
  if (!isPlaying) {
    isPlaying = true;
    carrossel.style.transform = 'translateX(0)'; // Reinicia a posição
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

let audioAtivo = true; // Por padrão, o áudio está ativo
//! Mas está falando só o mesmo acorde o tempo todo logo que carrega a tela sem apertar o play!!!! Deve estar Ativo apenas se apertar o PLAY
//* SOLUÇÃO: Vamos adicionar uma verificação para só reproduzir o áudio se o carrossel estiver em movimento.
//! Aperto o botão de som ativo ou não e não funciona nada.
//* SOLUÇÃO: Vamos adicionar a lógica para alternar o estado do áudio.

// Função para alternar o estado do áudio
function alternarSom() {
  audioAtivo = !audioAtivo;
  const botaoSom = document.getElementById('partituras-som');
  botaoSom.textContent = audioAtivo ? '🔊 Som' : '🔇 Som';
}

// Função para reproduzir o áudio do acorde
function reproduzirAudio(acorde) {
  //! Se audio Ativo e Play Ativo!!!!
  //* SOLUÇÃO: Vamos verificar se o carrossel está em movimento antes de reproduzir o áudio.
  if (audioAtivo && isPlaying) {
    //! Preciso desconbrir o que ele está lendo!!! e quando, pois precisamos ler só quem aparece/passa ao centro da página!!!
    const utterance = new SpeechSynthesisUtterance(acorde);
    speechSynthesis.speak(utterance);
  }
}

// Verifica quando um card entra na área central
//! Não consegui identificar essa área central x voz falada. Vamos fazer um css para sombrear essa área central?
//* SOLUÇÃO: Vamos adicionar um estilo CSS para destacar a área central.
function verificarCardCentral() {
  const cards = document.querySelectorAll('.card-container');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const centroTela = window.innerWidth / 2;

    if (rect.left <= centroTela && rect.right >= centroTela) {
      const acorde = card.querySelector('.card-acorde').getAttribute('data-acorde');
      reproduzirAudio(acorde);
    }
  });
}

// Observa o movimento do carrossel para verificar o card central
//! Ainda não consegui identificar para corrigir ou aprovar
//* SOLUÇÃO: Vamos ajustar o intervalo para verificar o card central apenas quando o carrossel estiver em movimento.
if (isPlaying) {
  setInterval(verificarCardCentral, 100);
}

// Adiciona o evento de alternar som ao botão
document.getElementById('partituras-som').addEventListener('click', alternarSom);