# 🎶 Resumo do Projeto - Acordes e Letras Interativas

# 📌 Objetivo

Criar uma interface interativa para exibição de acordes e trechos de músicas, permitindo a rolagem automática dos acordes sincronizada com a letra e possibilitando controle manual pelo usuário.

# 🔍 Funcionalidades

✔ Botões de Seleção de Música: Criados manualmente no HTML, adicionados periodicamente conforme o material do professor.
✔ Cards de Acordes: Cada música terá seus acordes exibidos em um carrossel horizontal com rolagem contínua da direita para a esquerda. O usuário poderá interagir manualmente para ajustar a posição dos acordes.
✔ Tempo de Rolagem: Valores fixos (2s = devagar, 1.5s = médio, 1s = rápido).
✔ Áudio dos Acordes: Pequenos áudios gravados previamente, associados a cada acorde.
✔ Reprodução de Música: Possibilidade de embutir áudio do YouTube ou exibir um quadro de vídeo na parte inferior da tela. Alternativamente, considerar gravações manuais para evitar anúncios.
✔ Botões de Controle: Ícones gráficos para play, pause e som.
✔ Responsividade: Tamanhos fixos, mas adaptáveis a diferentes telas (PC, tablet, celular). O trecho de música exibido será de aproximadamente 3 linhas.

# 📂 Estrutura do Projeto

📌 HTML - Definição da estrutura da página, botões e cards de acordes.
📌 CSS - Estilização dos cards, animação da rolagem e adaptação responsiva.
📌 JavaScript - Controle da rolagem dos acordes, reprodução de áudio e integração com o YouTube.

Treino_Partituras_Simplificadas:

📂 Portfolio_Proj_007-Treino_Partituras_Simplificadas
┣ 📂 templates (Para os arquivos HTML)
┃ ┣ 📄 partituras-index.html (Página principal)
┃ ┣ 📄 partituras-treino.html (Página de treino das partituras)
┃ ┗ 📄 partituras-config.html (Página de configurações, se precisar)
┣ 📂 static
┃ ┣ 📂 css (Para estilos)
┃ ┃ ┗ 📄 partituras-style.css
┃ ┣ 📂 js (Para scripts)
┃ ┃ ┗ 📄 partituras-script.js
┃ ┗ 📂 images (Para imagens)



<!-- =============================================== -->

Resumo do Projeto Revisado:

1. Objetivo Geral
Criar uma aplicação web para treinar partituras simplificadas de músicas, com:

Uma página inicial com botões de seleção de músicas.

Páginas específicas para cada música, contendo:

Cards de acordes com imagens e trechos da letra.

Rolagem automática dos cards (da direita para a esquerda) ao apertar "Play".

Controles de velocidade (devagar, médio, rápido).

Reprodução de áudio do YouTube ou áudio gravado.

Áudio que fala o nome do acorde quando ele aparece na tela.

2. Funcionalidades
Página Inicial:

Botões estáticos (criados manualmente no HTML) para selecionar músicas.

Cada botão redireciona para uma página específica da música.

Página da Música:

Cards de acordes:

Nome do acorde.

Imagem de como o acorde é tocado no cavaquinho.

Trecho da música correspondente ao acorde.

Rolagem automática dos cards (da direita para a esquerda) ao apertar "Play".

Controles:

Play/Pause.

Velocidade (devagar = 2s, médio = 1.5s, rápido = 1s).

Som (ligar/desligar áudio dos acordes).

Integração com YouTube (iframe) ou áudio gravado.

Áudio que fala o nome do acorde quando ele atinge 30% da tela.

Design:

Cores e estilo visual semelhantes ao projeto anterior.

Prefixo das classes: .partituras-.

Códigos separados em arquivos (HTML, CSS, JS).

📂 Portfolio_Proj_007-Treino_Partituras_Simplificadas
┣ 📂 templates
┃ ┣ 📄 partituras-index.html          (Página inicial com botões de músicas)
┃ ┣ 📄 partituras-treino-musica1.html (Página de treino para a música 1)
┃ ┣ 📄 partituras-treino-musica2.html (Página de treino para a música 2)
┃ ┗ 📄 ...                            (Outras páginas de músicas)
┣ 📂 static
┃ ┣ 📂 css
┃ ┃ ┣ 📄 partituras-global.css        (Estilos globais)
┃ ┃ ┣ 📄 partituras-index.css         (Estilos da página inicial)
┃ ┃ ┗ 📄 partituras-treino.css        (Estilos das páginas de treino)
┃ ┣ 📂 js
┃ ┃ ┣ 📄 partituras-index.js          (Scripts da página inicial)
┃ ┃ ┗ 📄 partituras-treino.js         (Scripts das páginas de treino)
┃ ┗ 📂 assets
┃ ┃ ┣ 📂 images                       (Imagens dos acordes)
┃ ┃ ┗ 📂 audio                        (Áudios dos acordes e músicas)

=======================================

Próximos Passos:

Implementar a rolagem automática dos cards.

Adicionar a integração com YouTube ou áudio gravado.

Implementar o áudio que fala o nome do acorde.

Testar e ajustar a responsividade.
