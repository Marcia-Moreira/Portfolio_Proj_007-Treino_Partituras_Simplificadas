

//! REVER criar CORRETO


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
