
// partituras-velocidade.js
//? CÓDIGO PARA VELOCIDADE DO CARROSSEL:
// Função para alterar a velocidade

//! Código começou a funcionar mas está com problemas de sincronia com cards, fala e marcação de cores 19/3 17:48h
// ? Está corrigido fala e velocidade ok


// Função para alterar a velocidade do carrossel e fala
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

      // Atualiza a velocidade da fala e limpa a fila de áudio
      velocidadeFala = novaFala;
      speechSynthesis.cancel(); // Para a fala atual imediatamente
  }
}

// Define a velocidade inicial da fala
let velocidadeFala = 1; 

// Atualiza a reprodução do áudio
function reproduzirAudio(acorde) {
  if (audioAtivo && isPlaying) {
      speechSynthesis.cancel(); // Interrompe qualquer fala anterior
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
  let tempoVerificacao = Math.max(80 - velocidadeFala * 20, 50); // Ajuste dinâmico
  verificacaoIntervalo = setInterval(verificarCardCentral, tempoVerificacao);
}

// Botões de velocidade:
document.getElementById('partituras-velocidade-devagar').addEventListener('click', function() {
  alterarVelocidade(150, 0.4); 
  ajustarIntervalo();
  marcarBotaoAtivo(this, 'grupo-velocidade');
});

document.getElementById('partituras-velocidade-medio').addEventListener('click', function() {
alterarVelocidade(110, 0.8);
ajustarIntervalo();
marcarBotaoAtivo(this, 'grupo-velocidade');
});

document.getElementById('partituras-velocidade-rapido').addEventListener('click', function() {
alterarVelocidade(70, 1.5);
ajustarIntervalo();
marcarBotaoAtivo(this, 'grupo-velocidade');
});

document.getElementById('partituras-velocidade-superRapido').addEventListener('click', function() {
alterarVelocidade(50, 3.0);
ajustarIntervalo();
marcarBotaoAtivo(this, 'grupo-velocidade');
});

// Inicia o intervalo de verificação
let verificacaoIntervalo = setInterval(verificarCardCentral, 100);