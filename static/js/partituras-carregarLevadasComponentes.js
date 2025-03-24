
//* OK Código para Carregar a Imagem Gerada pelo HTML dos Graficos de Levadas:

// partituras-carregarLevadasComponentes.js
async function carregarLevada(containerLevada, nomeLevada) {
    try {
        // Carrega o arquivo HTML da Levada
        const response = await fetch(`../../templates/levadasComponentes/${nomeLevada}.html`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar a levada: ${nomeLevada}`);
        }

        // Converte a resposta para texto (HTML)
        const html = await response.text();

        //! Insere o HTML no container???
        containerLevada.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Carrega todas as levadas da página
document.querySelectorAll('.container-levada').forEach(containerLevada => {
    const nomeLevada = containerLevada.getAttribute('data-levada');
    // carregarLevada(containerLevada, nomeLevada);
    if (nomeLevada) carregarLevada(containerLevada, nomeLevada);
});