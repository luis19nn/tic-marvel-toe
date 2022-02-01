# Tic Marvel Toe

Um site para jogar jogo da velha com personagens da Marvel, utilizando HTML, SCSS, TypeScript e Angular.

## Como usar

Primeiro, faça um clone deste repositório, executando o comando `git clone https://github.com/luis19nn/tic-marvel-toe.git` no terminal. Ele irá fazer o download de todos os arquivos do sistema no diretório onde o comando rodou.

Em seguida, navegue até a pasta com o sistema baixado, utilizando o comando `cd + caminho_da_pasta_no_seu_computador`.

Após isso, execute o seguinte comando, no terminal: `ng s -o`, ele irá criar e abrir um servidor em `http://localhost:4200/`. O sistema irá reiniciar automaticamente sempre que for feito alguma modificação.

## Sobre o código

Acesse a pasta `src`, é onde contém os arquivos principais referentes ao sistema. Nela, preste atenção nas pastas `app`, `assets` e `config-scss`, e nos arquivos `index.html` e `styles.scss`.

Estas pastas e arquivos contêm os principais códigos acerca dos componentes e do funcionamento geral do sistema.

A pasta `app` contém a `pages`, `service` e `shared`, bem como três arquivos em TypeScript. Falarei destas pastas e arquivos logo.

Na pasta `assets` é onde estão reunidas as imagens utilizadas no sistema.

A pasta `config-scss` contém arquivos de estilo separados. Eles estão divididos desta forma para poderem ser utilizados em quaisquer pontos necessários no sistema.

O arquivo `index.html` contém o html "pai", pois sua tag `<app-root>` abraça todo o código html final do site.

Já o arquivo `styles.scss` armazena o código de estilos gerais. Nele, você pode adicionar um estilo que será utilizado por todo o site, e é nele onde estão importados os estilos da pasta `config-scss`, para que os estilos desta pasta sejam utilizados de forma global.

Finalmente, sobre as pastas dentro de `app` mencionadas anteriormente, a pasta `pages` contém as páginas do site que, neste caso, há apenas uma: a home. Na pasta `service` há a conexão com a API da Marvel, onde é feito o contato HTTP. Na pasta `shared` contém os componentes utilizados no sistema, que são eles: `player-selection`, `player-selected`, `search` e `tic-tac-toe`.

O componente `player-selection` é responsável por renderizar na tela a escolha de personagens, o primeiro componente mostrado ao entrar no site. Nele, há uma imagem, há o nome do personagem e há a utilização do componente `search`, responsável por pesquisar personagens na API da Marvel.

O componente `player-selected` é responsável por apresentar o personagem escolhido, com suas vitórias, derrotas, empates, bem como se ele é o X ou o Círculo no jogo da velha, além de mostrar a imagem e nome dos personagens escolhidos na tela anterior.

O componente `tic-tac-toe` possui toda a lógica e visual do jogo da velha, renderizado na segunda tela, ainda na página home. É ele onde o jogo é jogado e decidido o vencedor.

A página `home`, dentro da pasta `pages`, utiliza os componentes citados para renderizá-los na tela. Ela renderiza o componente `player-selection` caso não haja personagens selecionados, e renderiza o botão de START quando os personagens forem selecionados. Após clicar no botão, um evento é disparado e a `home` renderiza o componente `player-selected` junto ao `tic-tac-toe`, apresentando a segunda tela, mostrada apenas se os personagens tiverem sido selecionados.

É também na `home` que é feita a lógica de pontuação, onde é decidido qual dos dois jogadores venceu, perdeu ou se empatou, e é enviado ao componente `player-selected` o resultado desta lógica.

## Considerações finais

Espero que goste deste projeto, com ele aprendi muito e me diverti fazendo. Quaisquer dúvidas, pode entrar em contato, meus contatos estão em minha página principal aqui mesmo no GitHub. Até a próxima!
