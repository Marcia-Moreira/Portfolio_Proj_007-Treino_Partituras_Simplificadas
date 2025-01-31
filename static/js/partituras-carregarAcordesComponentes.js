
//* OK Código para Carregar a Imagem Gerada pelo HTML dos Acordes:

// partituras-carregarAcordesComponentes.js
async function carregarAcorde(container, nomeAcorde) {
    try {
        // Carrega o arquivo HTML do acorde
        const response = await fetch(`../acordesComponentes/${nomeAcorde}.html`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o acorde: ${nomeAcorde}`);
        }

        // Converte a resposta para texto (HTML)
        const html = await response.text();

        // Insere o HTML no container
        container.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Carrega todos os acordes da página
document.querySelectorAll('.card-acorde').forEach(container => {
    const nomeAcorde = container.getAttribute('data-acorde');
    carregarAcorde(container, nomeAcorde);
});