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


============================================================================
31-01-2025:
# Movimento Slider/Carrossel

Este projeto consiste em um carrossel de cards que se movem da direita para a esquerda, com funcionalidades de controle de velocidade, pausa, reprodução e integração com áudio para auxiliar no aprendizado de acordes de música. Abaixo estão os tópicos de implementação e melhorias necessárias.

---

## Implementação

- [ ] **Movimento dos cards**: Implementar o movimento dos cards da direita para a esquerda.
- [ ] **Velocidade padrão**: Definir a velocidade média como padrão, caso o usuário não escolha uma.
- [ ] **Inicialização**: Ao carregar a página, os cards devem aparecer parados, permitindo que o usuário navegue lateralmente pela barra inferior para visualizar os acordes.
- [ ] **Iniciar treino**: Ao pressionar o botão PLAY, os cards devem desaparecer rapidamente e começar a surgir da direita com velocidade média.
- [ ] **Controle de velocidade**: Permitir que o usuário altere a velocidade (lenta, média, rápida) durante a execução.
- [ ] **Botão de pausa**: Implementar um botão de pausa que muda de cor quando ativo. Ao pausar, o movimento dos cards deve parar, e ao pressionar PLAY novamente, o movimento deve retomar.
- [ ] **Área central demarcada**: Criar uma área central na tela onde, quando um card entra nessa região, um áudio deve ser acionado para falar o nome do acorde.
- [ ] **Ativação/desativação de áudio**: Adicionar um botão para ativar ou desativar o recurso de áudio, que deve estar ativo por padrão.
- [ ] **Card de fim**: Incluir um card de "FIM" no carrossel.
- [ ] **Comportamento ao finalizar**: Definir se, ao chegar no card de "FIM", o carrossel deve retornar automaticamente ao início ou parar e aguardar um novo PLAY.
- [ ] **Maximizar tela**: Implementar a funcionalidade de maximizar a tela, com o botão desaparecendo em telas de celular (usando `display: none` em tamanhos específicos).
- [ ] **Centralização do carrossel**: Ao iniciar o PLAY, o carrossel deve assumir a centralização prioritária da tela, permitindo que o usuário role a tela para ver os botões superiores, se necessário.
- [ ] **Responsividade**: Ajustar o tamanho dos acordes dentro dos cards, o tamanho dos botões de serviço e o espaçamento das letras nos botões de escolha de música para telas de celular.
- [ ] **Proporcionalização dos acordes**: Ajustar os tamanhos dos acordes em HTML para evitar que vazem dos cards em telas de celular.
- [ ] **Centralização da sexta casa**: Garantir que a sexta casa do acorde fique alinhada na parte inferior de todos os cards, independentemente do número de linhas do título.

---

## Melhoria

- [ ] **Destaque na área central**: Melhorar a visibilidade dos cards na área central, esmaecendo levemente os cards nas laterais ou alterando a cor do container quando os cards passam pela região central.
- [ ] **Cores do tema**: Definir o root de cores claras e escuras em tons de verde para implementação no código.
- [ ] **Estilização dos botões**: Melhorar a aparência dos botões de serviço, adicionando relevo, profundidade e sombra para que pareçam mais interativos.
- [ ] **Números das casas e nomes das cordas**: Adicionar números das casas do "braço" do cavaquinho e os nomes das cordas (D, R, etc.) de forma esmaecida ao lado dos acordes para auxiliar no posicionamento.
- [ ] **Card de fim estilizado**: Melhorar o design do card de "FIM" para que seja visualmente claro e coerente com o restante do carrossel.
- [ ] **Feedback visual durante pausa**: Adicionar um feedback visual mais claro quando o carrossel está pausado (ex.: mudança de cor ou ícone no botão de PLAY/PAUSE).
- [ ] **Ajustes de padding**: Verificar e ajustar o padding interno dos botões e cards para melhorar a estética em telas de celular.
- [ ] **Testes de usabilidade**: Realizar testes de usabilidade para garantir que a experiência do usuário seja fluida e intuitiva em diferentes dispositivos.  
- [ ] **Barra de Rolagem inferior**: Melhorar a aparencia da barra de rolagem inferior.  
- [ ] **Botões escolha de Música**: Separar em duas colunas? Ou apenas diminuir a Largura do botão na coluna única central?  
- [ ] **Botão Youtube**: Criar link de vídeo e/ou áudio da música a ser estudada do Youtube?

---

## Funcionalidades já implementadas e funcionando

- [x] Botão "Fechar" da segunda tela.
- [x] Botão "Ampliar/Maximizar" da segunda tela.
- [x] Botões/Links de escolha de música na primeira tela.