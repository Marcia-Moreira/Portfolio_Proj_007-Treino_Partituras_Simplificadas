// {/* <button onclick="maximizar()">Maximizar</button> */}

//* OK Código para Maximizar a Segunda Tela HTML:

// {/* <script> */}
function maximizar() {
    if (window.opener && !window.opener.closed) { 
        // Verifica se foi aberta por outra página
        window.resizeTo(screen.availWidth, screen.availHeight);
        window.moveTo(0, 0);
    } else {
        alert("Não é possível maximizar, pois a janela não foi aberta corretamente.");
    }
}
// </script>