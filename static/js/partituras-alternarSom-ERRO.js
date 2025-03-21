
//* OK Alternar Imagens do Botão Som Ativo ou Desativado: só altera a imagem...

function alternarSom() {
    let botaoSom = document.getElementById("partituras-som");
    if (botaoSom.innerHTML.includes("🔊")) {
        botaoSom.innerHTML = "🔇 <span>Som</span>";
    } else {
        botaoSom.innerHTML = "🔊 <span>Som</span>";
    }
}

//! Criar Lógica para MUTE e DESMUTE:

let audioAtivo = true; // Por padrão, o áudio está ativo

function reproduzirAudio(acorde) {
  if (audioAtivo && isPlaying) { // Só reproduz se o áudio estiver ativo e o carrossel estiver em movimento
    const utterance = new SpeechSynthesisUtterance(acorde);
    speechSynthesis.speak(utterance);
  }
}