
//* OK Alternar Imagens do Botão Som Ativo ou Desativado:

function alternarSom() {
    let botaoSom = document.getElementById("partituras-som");
    if (botaoSom.innerHTML.includes("🔊")) {
        botaoSom.innerHTML = "🔇 <span>Som</span>";
    } else {
        botaoSom.innerHTML = "🔊 <span>Som</span>";
    }
}

//! Criar Lógica para MUTE e DESMUTE: