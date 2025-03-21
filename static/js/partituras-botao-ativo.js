// partituras-botao-ativo.js

// Função para marcar um botão como ativo dentro do mesmo grupo
function marcarBotaoAtivo(botao, grupoClasse) {
    // Remove a classe apenas dos botões do mesmo grupo
    document.querySelectorAll(`.${grupoClasse}`).forEach(btn => btn.classList.remove('botao-ativo'));
    
    // Adiciona a classe ao botão clicado
    botao.classList.add('botao-ativo');
}

// Obs.: Incluir/chamar a função dentro de cada JS específica de botão, se necessário.