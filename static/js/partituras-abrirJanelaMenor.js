{/* <a href="#" onclick="abrirJanelaMenor('pagina2.html')">Abrir Segunda Tela</a> */}

{/* <script> */}
let minhaJanela; // Variável global para armazenar a janela

function abrirJanelaMenor(url) {
    let largura = window.innerWidth * 0.9;
    let altura = window.innerHeight * 0.9;

    // Abre a nova janela e armazena a referência globalmente
    minhaJanela = window.open(url, '_blank', `width=${largura},height=${altura},resizable=yes`);
}
{/* </script> */}
