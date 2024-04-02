# Remake Serrapilheira - README

## Conteúdo

- **filtro.js**: Este arquivo contém um exemplo de código JavaScript que inclui uma função `gerarListaHTML`. Esta função é projetada para gerar HTML dinâmico com base em uma lista de pesquisadores e dois filtros.
- **scrapper.js**: Este arquivo contém uma função utilizada para obter o conteúdo de cada pesquisador da página original, a partir de um _bookmarklet_.
- > Um _bookmarklet_ é um pequeno programa JavaScript armazenado como um marcador (ou "favorito") em um navegador da web. Quando clicado, um bookmarklet executa uma ou mais ações específicas na página da web atual, modificando seu comportamento de alguma forma.
- **scrap.js**: Este arquivo apenas contém uma váriavel com os dados obtidos do scrapper.
- **utils.js**: Este arquivo contém funções pequenas e gerais que foram necessárias para modularização.
- **index.html**: Este arquivo HTML inclui uma caixa de pesquisa, um dropdown de ano e um local para exibir o HTML gerado pela função `gerarListaHTML`. Além do Header, Main e Footer.
- **serrapilheira.css**: Este arquivo CSS contém estilos básicos para o HTML.
- **BootStrap**: Utilizei diversas classes prontas do BootStrap para agilizar meu trabalho e também para deixá-lo mais belo, além de ter o minimo de responsividade, como por exemplo:
  - Container
  - Navbar
  - D-flex
  - Sistema de Grid com rows e col 

## Como Usar

1. Acesse o link onde está o deploy via GitHub Pages para HTML estático: [Remake Serrapilheira](https://elc1090.github.io/project1-2024a-RamonXXII/)
2. Digite uma palavra-chave da área de seu interesse na caixa de pesquisa para filtrar os pesquisadores por área de pesquisa.
3. Selecione um ano no dropdown para filtrar os pesquisadores por ano.
4. O HTML gerado será exibido na seção abaixo dos controles.
