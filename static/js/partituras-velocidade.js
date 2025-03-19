
// partituras-velocidade.js
//? CÓDIGO PARA VELOCIDADE DO CARROSSEL:
// Função para alterar a velocidade

//! Código começou a funcionar mas está com problemas de sincronia com cards, fala e marcação de cores 19/3 17:48h
// ? Está corrigido fala e velocidade

// partituras-velocidade.js

function alterarVelocidade(novaVelocidade, novaFala) {
  const carrossel = document.querySelector('.partituras-carrossel');
  
  if (carrossel) {
      const isPlaying = carrossel.getAttribute('data-playing') === 'true';

      carrossel.style.animationPlayState = 'paused'; // Pausa antes de alterar
      carrossel.style.animationDuration = `${novaVelocidade}s`; // Define nova duração

      if (isPlaying) {
          setTimeout(() => {
              carrossel.style.animationPlayState = 'running'; // Retoma após ajuste
          }, 100);
      }

      // Atualiza a velocidade da fala
      velocidadeFala = novaFala; 
  }
}

// Define a velocidade inicial da fala
let velocidadeFala = 1; 

// Atualiza a reprodução do áudio
function reproduzirAudio(acorde) {
  if (audioAtivo && isPlaying) {
      const utterance = new SpeechSynthesisUtterance(acorde);
      utterance.lang = 'pt-BR';
      utterance.rate = velocidadeFala; // Ajusta a velocidade da fala
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
  }
}

// Ajusta o intervalo de verificação conforme a velocidade
function ajustarIntervalo() {
  clearInterval(verificacaoIntervalo);
  let tempoVerificacao = velocidadeFala < 1 ? 150 : 100;
  verificacaoIntervalo = setInterval(verificarCardCentral, tempoVerificacao);
}

// Botões de velocidade
document.getElementById('partituras-velocidade-devagar').addEventListener('click', () => {
  alterarVelocidade(100, 0.7); // Fala mais devagar
  ajustarIntervalo();
});

document.getElementById('partituras-velocidade-medio').addEventListener('click', () => {
  alterarVelocidade(90, 1); // Fala normal
  ajustarIntervalo();
});

document.getElementById('partituras-velocidade-rapido').addEventListener('click', () => {
  alterarVelocidade(70, 1.5); // Fala mais rápida
  ajustarIntervalo();
});

document.getElementById('partituras-velocidade-superRapido').addEventListener('click', () => {
  alterarVelocidade(60, 2); // Fala super rápida
  ajustarIntervalo();
});

// Inicia o intervalo de verificação
let verificacaoIntervalo = setInterval(verificarCardCentral, 100);
