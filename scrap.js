javascript:(function() {
    var itens = document.querySelectorAll('li.serra-grid-item.pesquisador');
    var resultados = [];

    itens.forEach(function(item) {
        var pesquisador = item.querySelector('h3').textContent;
        var link = item.querySelector('a').getAttribute('href');
        var area = item.querySelector('.areas-pesquisador').textContent;
        var img = item.querySelector('.serra-thumb-portfolio').querySelector('img').getAttribute('src');
        var projeto = item.querySelector('.projetos-pesquisador .projeto-pesquisador').textContent;

        resultados.push({
            nome: pesquisador,
            href: link,
            area: area,
            img: img,
            projeto: projeto
        });
    });

    console.log(resultados);
})();

var scrap = [
  {
    "nome": "Amanda Cunha",
    "href": "https://serrapilheira.org/pesquisadores/amanda-cunha/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Amanda-Cunha-1-300x300.png",
    "projeto": "Como a interação entre hidroides e seus substratos vivos molda os padrões de diversidade desses invertebrados coloniais marinhos? (2023)"
  },
  {
    "nome": "Anton Castro Miguez | UFSCAR",
    "href": "https://serrapilheira.org/pesquisadores/anton-castro-miguez-ufscar/",
    "area": "\n            Diversidade na ciência        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/02/anton-300x300.png",
    "projeto": "Projeto Pluralizar (2023)"
  },
  {
    "nome": "Artur Miranda",
    "href": "https://serrapilheira.org/pesquisadores/artur-miranda/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Artur-Miranda-2-300x300.png",
    "projeto": "A via da CAMKII é um regulador central da disfunção de cardiomiócitos e da carga parasitária de T. cruzi durante a implementação da cardiomiopatia chagásica? (2023)"
  },
  {
    "nome": "Bede Izuchukwu",
    "href": "https://serrapilheira.org/pesquisadores/bede-izuchukwu/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Ezewudo-Bede-300x300.png",
    "projeto": "Quais são o destino e os principais fatores que controlam a dinâmica dos microplásticos e nanoplásticos no Rio Guandu, e como podem ser determinados? (2023)"
  },
  {
    "nome": "Carlos D’Apolito",
    "href": "https://serrapilheira.org/pesquisadores/carlos-dapolito/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Carlos-DApolito-1-300x300.png",
    "projeto": "As savanas e florestas secas se espalharam pelo sudoeste da Amazônia durante a última glaciação? (2023)"
  },
  {
    "nome": "Celina Rodrigues",
    "href": "https://serrapilheira.org/pesquisadores/celina-rodrigues/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Celina-300x300.png",
    "projeto": "Como as mudanças climáticas influenciam as trocas de CO2 nos biomas brasileiros, na Amazônia Azul, no Oceano Atlântico Sudoeste e Antártico? (2023)"
  },
  {
    "nome": "Cesar Rocha",
    "href": "https://serrapilheira.org/pesquisadores/cesar-rocha/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Cesar-Rocha-1-300x300.png",
    "projeto": "A turbulência de pequena escala no oceano abissal força a variabilidade climática? (2023)"
  },
  {
    "nome": "Cibele Rocha Resende",
    "href": "https://serrapilheira.org/pesquisadores/cibele-rocha-resende/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Cibele-Rocha-Resende-300x300.png",
    "projeto": "Os macrófagos residentes são ativados pelo estresse cardíaco? (2023)"
  },
  {
    "nome": "Cintia Gomes de Freitas",
    "href": "https://serrapilheira.org/pesquisadores/cintia-gomes-de-freitas/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Cinthia-freitas-300x300.png",
    "projeto": "Populações humanas pré-Colombianas deixaram sua marca na estrutura genética de espécies de palmeiras? (2023)"
  },
  {
    "nome": "Cleiton Breder Eller",
    "href": "https://serrapilheira.org/pesquisadores/cleiton-breder-eller/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Cleiton-Eller-1-300x300.png",
    "projeto": "Podemos usar princípios evolutivos para predizer a mortalidade de plantas durante a seca e a  coexistência de plantas em ambientes áridos? (2023)"
  },
  {
    "nome": "Dalton Colombo",
    "href": "https://serrapilheira.org/pesquisadores/dalton-colombo/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Dalton-Colombo-1-300x300.png",
    "projeto": "Os circuitos eletrônicos existentes operam com base em sinais em formatos analógico e digital. É possível mudar esse paradigma e utilizar sinais no domínio tempo? (2023)"
  },
  {
    "nome": "Daniel Ardisson-Araújo",
    "href": "https://serrapilheira.org/pesquisadores/11932/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Daniel-Ardisson-Araujo-300x300.png",
    "projeto": "Podemos controlar populações de insetos-praga da agricultura afetando a microbiota do intestino com a exposição oral a vírus que matam bactérias? (2023)"
  },
  {
    "nome": "Daniela Boanares",
    "href": "https://serrapilheira.org/pesquisadores/daniela-boanares/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Daniela-Boanares-300x300.png",
    "projeto": "Quais são os fatores estruturantes da comunidade dos campos rupestres que explicam sua alta diversidade? (2023)"
  },
  {
    "nome": "Deliane Penha",
    "href": "https://serrapilheira.org/pesquisadores/deliane-penha/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/deliane-penha-300x300.png",
    "projeto": "Quais características de árvores tropicais melhor indicam vulnerabilidade às mudanças globais? (2023)"
  },
  {
    "nome": "Dyana Duarte",
    "href": "https://serrapilheira.org/pesquisadores/dyana-duarte/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Dyana-Duarte-300x300.png",
    "projeto": "Existem fases exóticas no diagrama de fases da Cromodinâmica Quântica? (2023)"
  },
  {
    "nome": "Edileusa Gerhardt",
    "href": "https://serrapilheira.org/pesquisadores/edileusa-gerhardt/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Edileusa-Gerhardt-300x300.png",
    "projeto": "Como as proteínas PII integram e regulam o metabolismo microbiano e como isso afeta a fixação de nitrogênio em Azospirillum brasilense? (2023)"
  },
  {
    "nome": "Eduardo Pena ",
    "href": "https://serrapilheira.org/pesquisadores/eduardo-pena/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Eduardo-Pena-1-300x300.png",
    "projeto": "Como descobrir metadados relevantes para o gerenciamento de dados? (2023)"
  },
  {
    "nome": "Emanuelle Brito",
    "href": "https://serrapilheira.org/pesquisadores/emanuelle-brito/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Emanuelle-Brito-300x300.png",
    "projeto": "Como a conservação de polinizadores pode promover a segurança alimentar? (2023)"
  },
  {
    "nome": "Fábio Brito-Santos ",
    "href": "https://serrapilheira.org/pesquisadores/fabio-santos/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Fabio-Santos-300x300.png",
    "projeto": "Qual o impacto de áreas antropizadas da região amazônica na biodiversidade de fungos patogênicos sob a perspectiva da saúde única? (2023)"
  },
  {
    "nome": "Fátima Arcanjo",
    "href": "https://serrapilheira.org/pesquisadores/fatima-arcanjo/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Fatima-Arcanjo-300x300.png",
    "projeto": "Como as incertezas na trajetória de sucessão podem afetar os estoques de carbono na Mata Atlântica brasileira? (2023)"
  },
  {
    "nome": "Felipe Gonçalves",
    "href": "https://serrapilheira.org/pesquisadores/felipe-goncalves/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Felipe-Goncalves-300x300.png",
    "projeto": "Qual é o arranjo mais eficiente de esferas em várias dimensões? (2023)"
  },
  {
    "nome": "Fernando Iemini",
    "href": "https://serrapilheira.org/pesquisadores/fernando-lemini/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Fernando-Iemini.png",
    "projeto": "Quais são os limites fundamentais em nossa capacidade de medir o tempo com as leis da termodinâmica quântica e da teoria de muitos corpos? (2023)"
  },
  {
    "nome": "Gabriela Betella Cybis",
    "href": "https://serrapilheira.org/pesquisadores/gabriela-betella-cybis/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Gabriela-Cybis-300x300.jpg",
    "projeto": "Podemos fazer melhor uso de sequências genéticas para identificar novas variantes virais de rápida propagação? (2023)"
  },
  {
    "nome": "Guilherme Ost",
    "href": "https://serrapilheira.org/pesquisadores/guilherme-ost/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Guilherme-Ost-1-300x300.png",
    "projeto": "Dados os registros da atividade simultânea de um conjunto de neurônios, como inferir as interações entre os neurônios desse conjunto? (2023)"
  },
  {
    "nome": "Jeferson Vizentin-Bugoni",
    "href": "https://serrapilheira.org/pesquisadores/jeferson-vizentin-bugoni/",
    "area": "\n            Biologia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Jeferson-Vizentin-Bugoni-1-300x300.png",
    "projeto": "Interações de dispersão de sementes ajudarão plantas tropicais a superarem as mudanças climáticas? (2023)"
  },
  {
    "nome": "Jethro Van Ekeren",
    "href": "https://serrapilheira.org/pesquisadores/jethro-van-ekeren/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/jethro-300x300.png",
    "projeto": "Teoria de representações de álgebras de vértices - nova etapa (2023)"
  },
  {
    "nome": "João Paulo de Sá Felizardo",
    "href": "https://serrapilheira.org/pesquisadores/joao-paulo-de-sa-felizardo/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/joao-paulo-felizardo-300x300.png",
    "projeto": "Quais os impactos da eutrofização nas teias alimentares marinhas? (2023)"
  },
  {
    "nome": "Juliana Brito",
    "href": "https://serrapilheira.org/pesquisadores/juliana-brito/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Juliana-Brito-300x300.png",
    "projeto": "É possível continuar vivendo em um planeta sem energia limpa e consciência ambiental? (2023)"
  },
  {
    "nome": "Juliana Leal ",
    "href": "https://serrapilheira.org/pesquisadores/juliana-leal/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Juliana-Leal-300x300.png",
    "projeto": "Um novo paradigma para as fontes de energia nas teias tróficas de riachos tropicais? (2023)"
  },
  {
    "nome": "Kamilla Avelino de Souza",
    "href": "https://serrapilheira.org/pesquisadores/kamilla-avelino-de-souza/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Kamilla-de-Souza-300x300.png",
    "projeto": "Rede Brasileira de Neurobiodiversidade (2023)"
  },
  {
    "nome": "Karlos Kochhann",
    "href": "https://serrapilheira.org/pesquisadores/karlos-kochhann/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Karlos-Kochhann-300x300.png",
    "projeto": "As áreas úmidas da Amazônia foram fontes ou sumidouros de carbono durante os últimos estados de aquecimento global? (2023)"
  },
  {
    "nome": "Keltony Aquino",
    "href": "https://serrapilheira.org/pesquisadores/keltony-aquino/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Keltony-aquino-300x300.png",
    "projeto": "A erosão costeira e o desenvolvimento urbano afetam padrões e processos ecológicos em praias arenosas? (2023)"
  },
  {
    "nome": "Leandro Maracahipes",
    "href": "https://serrapilheira.org/pesquisadores/leandro-maracahipes/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Leandro-Maracahipes-300x300.png",
    "projeto": "Avaliando a vulnerabilidade das savanas brasileiras às interações entre seca e incêndios: implicações para o armazenamento de carbono, funcionamento do ecossistema e sucesso na restauração (2023)"
  },
  {
    "nome": "Marcelo L Campos",
    "href": "https://serrapilheira.org/pesquisadores/marcelo-l-campos/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Marcelo-Campos-300x300.png",
    "projeto": "Por que as plantas são resistentes à maioria dos insetos? (2023)"
  },
  {
    "nome": "Marília Sonego",
    "href": "https://serrapilheira.org/pesquisadores/marilia-sonego/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Marilia-sonego-1-300x300.png",
    "projeto": "Como as trincas no fruto da castanha-do-pará podem funcionar como mecanismos de tenacificação resultando em uma cápsula protetora extraordinária? (2023)"
  },
  {
    "nome": "Mariza Ferro",
    "href": "https://serrapilheira.org/pesquisadores/mariza-ferro/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Mariza-Ferro-1-300x300.png",
    "projeto": "Inteligência Artificial Sustentável para Previsão de Chuvas Extremas e Prevenção de Grandes Desastres em Áreas Urbanas (2023)"
  },
  {
    "nome": "Mauricio Poletti",
    "href": "https://serrapilheira.org/pesquisadores/mauricio-poletti/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Mauricio-Poletti-1-300x300.png",
    "projeto": "Quão típico é o caos? (2023)"
  },
  {
    "nome": "Micael Amore Cecchini",
    "href": "https://serrapilheira.org/pesquisadores/micael-amore-cecchini/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Micael-Amore-Cecchini-300x300.png",
    "projeto": "A relação entre o nível de organização de nuvens na Amazônia e sua eficiência em gerar chuva (2023)"
  },
  {
    "nome": "Michel Naslavsky",
    "href": "https://serrapilheira.org/pesquisadores/michel-naslavsky/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Michel-Naslavski-300x300.png",
    "projeto": "Como a ancestralidade genômica e miscigenação modulam os efeitos do gene APOE na substância branca, mielinização e declínio cognitivo? (2023)"
  },
  {
    "nome": "Olavo Bohrer Amaral",
    "href": "https://serrapilheira.org/pesquisadores/olavo-bohrer-amaral/",
    "area": "\n            Ciência aberta        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Olavo-Amaral-300x300.png",
    "projeto": "No-Budget Science Hack Week (2021/2022/2024)"
  },
  {
    "nome": "Pedro Milet Meirelles",
    "href": "https://serrapilheira.org/pesquisadores/pedro-milet-meirelles/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Pedro-Meireles-300x300.png",
    "projeto": "Qual é o papel da matéria escura microbiana na estabilidade dos ecossistemas? (2023)"
  },
  {
    "nome": "Rafael Raimundo",
    "href": "https://serrapilheira.org/pesquisadores/rafael-raimundo/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Rafael-Raimundo-1-300x300.png",
    "projeto": "Sincronizando redes ecológicas e socioeconômicas para alcançar a sustentabilidade (2023)"
  },
  {
    "nome": "Ramon Moreira Nunes",
    "href": "https://serrapilheira.org/pesquisadores/ramon-moreira-nunes/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Ramon-Moreira-Nunes-300x300.png",
    "projeto": "Como estimar funções L? (2023)"
  },
  {
    "nome": "Renata Rojas",
    "href": "https://serrapilheira.org/pesquisadores/renata-rojas/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Renata-Rojas-1-300x300.png",
    "projeto": "Modelos dinâmicos para variáveis aleatórias duplamente limitadas: como prever indicadores de desenvolvimento sustentável medidos em taxas e proporções? (2023)"
  },
  {
    "nome": "Rodolfo Silva",
    "href": "https://serrapilheira.org/pesquisadores/rodolfo-silva/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Rodolfo-silva-300x300.png",
    "projeto": "O que governa a dimensionalidade de comunidades marinhas costeiras ao longo do Atlântico Sudoeste? (2023)"
  },
  {
    "nome": "Rosani Matoso | Instituto Mancala",
    "href": "https://serrapilheira.org/pesquisadores/instituto-mancala/",
    "area": "\n            Diversidade na ciência        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/01/rosani-mancala-300x300.png",
    "projeto": "Projeto Mukengi (2023)"
  },
  {
    "nome": "Susanne Maciel",
    "href": "https://serrapilheira.org/pesquisadores/susanne-maciel/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Susanne-Maciel-1-300x300.png",
    "projeto": "Como a composição física do ruído sísmico influencia os métodos de imageamento/monitoramento baseados em ruído ambiente? (2023)"
  },
  {
    "nome": "Taicia Fill",
    "href": "https://serrapilheira.org/pesquisadores/taicia-fill/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/taicia.png",
    "projeto": "Quais são as bases moleculares de associações simbióticas fungo-planta? (2023)"
  },
  {
    "nome": "Thamyres Sabrina Gonçalves",
    "href": "https://serrapilheira.org/pesquisadores/thamyres-sabrina/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Thamyres-Sabrina-300x300.png",
    "projeto": "O que podem os carvões dizer sobre a origem e evolução fitogeográfica das ilhas florestais associadas às turfeiras da Serra do Espinhaço? (2023)"
  },
  {
    "nome": "Thiago Guerreiro",
    "href": "https://serrapilheira.org/pesquisadores/thiago-barbosa-dos-santos-guerreiro/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Thiago-Guerreiro-300x300.png",
    "projeto": "Podemos detectar a natureza quântica de campos gravitacionais? (2023)"
  },
  {
    "nome": "Vanderson Lima",
    "href": "https://serrapilheira.org/pesquisadores/vanderson-lima/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/09/Vanderson-Lima-300x300.png",
    "projeto": "Como detectar buracos negros via desigualdades geométricas? (2023)"
  },
  {
    "nome": "Victor Felix",
    "href": "https://serrapilheira.org/pesquisadores/victor-felix/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2024/01/Victor-Felix-300x300.png",
    "projeto": "A ecologia de saberes sobre o solo pode contribuir com o avanço da ciência do solo e os desafios globais? (2023)"
  },
  {
    "nome": "Alvaro Ferraz Filho | IIF",
    "href": "https://serrapilheira.org/pesquisadores/alvaro-ferraz-filho/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/08/alvaro-300x300.png",
    "projeto": "Novas Fronteiras em Física (2022)"
  },
  {
    "nome": "Anna Venturini",
    "href": "https://serrapilheira.org/pesquisadores/anna-venturini/",
    "area": "\n            Diversidade na ciência        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2021/11/anna-corte.png",
    "projeto": "Observatório das Ações Afirmativas na Pós-Graduação (2021/2022)"
  },
  {
    "nome": "Carlos Joly",
    "href": "https://serrapilheira.org/pesquisadores/carlos-joly/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2023/01/carlos-joly-300x300.png",
    "projeto": "Plataforma Brasileira de  Biodiversidade e Serviços  Ecossistêmicos (2022)"
  },
  {
    "nome": "Catarina Jakovac",
    "href": "https://serrapilheira.org/pesquisadores/catarina-jakovac/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/catarina-jakovac-1-300x300.png",
    "projeto": "Impactos humanos podem levar à transformação de florestas úmidas em florestas secas? (2022)"
  },
  {
    "nome": "Edroaldo Rocha",
    "href": "https://serrapilheira.org/pesquisadores/edroaldo-lummertz-da-rocha/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Edroaldo-Lumentz-300x300.png",
    "projeto": "A semente e o solo, como o tumor primário se comunica com a medula óssea para promover metástase (2022)"
  },
  {
    "nome": "Edson Sampaio",
    "href": "https://serrapilheira.org/pesquisadores/edson-sampaio/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/edson-Sampaio-1-300x300.png",
    "projeto": "Invariantes da geometria Lipschitz das singularidades (2022)"
  },
  {
    "nome": "Eugenio Hottz",
    "href": "https://serrapilheira.org/pesquisadores/eugenio-hottz/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Euenio-Hotz-300x300.png",
    "projeto": "Mecanismos de tromboinflamação em infecções virais (2022)"
  },
  {
    "nome": "Fábio Pereira dos Santos",
    "href": "https://serrapilheira.org/pesquisadores/fabio-pereira-dos-santos/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Fabio-Santos-300x300.png",
    "projeto": "Dinâmica Computacional Quântica: uma nova era para soluções de equações diferenciais parciais (2022)"
  },
  {
    "nome": "Gabriela Prestes Carneiro",
    "href": "https://serrapilheira.org/pesquisadores/gabriela-prestes-carneiro/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Gabriela-Prestes-1-300x300.png",
    "projeto": "Janelas para a Biodiversidade do Baixo Amazonas (JABBA) : contribuições dos sambaquis do passado para a preservação ambiental no presente amazônico (2022)"
  },
  {
    "nome": "Jaqueline Goes",
    "href": "https://serrapilheira.org/pesquisadores/jaqueline-goes/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Jaqueline-Goes-1-300x300.png",
    "projeto": "Transmissão de patógenos emergentes entre Angola e Brasil (2022)"
  },
  {
    "nome": "Juliane Ishida",
    "href": "https://serrapilheira.org/pesquisadores/juliane-ishida/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Juliane-Ishida-300x300.png",
    "projeto": "Desvendando o papel dos RNAs invasores no parasitismo vegetal (2022)"
  },
  {
    "nome": "Maria Carolina Gonzalez",
    "href": "https://serrapilheira.org/pesquisadores/maria-carolina-gonzalez/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Carolina-Gonzalez-1-300x300.png",
    "projeto": "Influência das experiências prévias sobre novas aprendizagens (2022)"
  },
  {
    "nome": "Rodrigo Ramos",
    "href": "https://serrapilheira.org/pesquisadores/rodrigo-ramos/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Rodrigo-Ramos-300x300.png",
    "projeto": "Macrófagos FOLR2+ como imunotermômetros biológicos na fase inicial da carcinogênese em pacientes (2022)"
  },
  {
    "nome": "Vanessa Staggemeier",
    "href": "https://serrapilheira.org/pesquisadores/vanessa-staggemeier/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Vanessa-Steggmeyer-300x300.png",
    "projeto": "Desvendando o tesouro da biodiversidade: explorando genes e coleções de museus para conservar a diversidade na Floresta Atlântica e promover a ciência-cidadã (2022)"
  },
  {
    "nome": "Bárbara Amaral",
    "href": "https://serrapilheira.org/pesquisadores/barbara-amaral/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2021/10/barbara-amaral-300x300.png",
    "projeto": "Uso da criptografia quântica para a solução do comprometimento de bit (2021)"
  },
  {
    "nome": "Cristiane Calixto",
    "href": "https://serrapilheira.org/pesquisadores/cristiane-calixto/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Cristiane-Calixto-300x300.png",
    "projeto": "‘Memória’ de temperatura em plantas: como é possível? (2021)"
  },
  {
    "nome": "Daniel Grassechi",
    "href": "https://serrapilheira.org/pesquisadores/daniel-grassechi/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Daniel-Grassechi-300x300.png",
    "projeto": "Controlando reações químicas na superfície de nanomateriais bidimensionais (2021)"
  },
  {
    "nome": "Dirk Erhard",
    "href": "https://serrapilheira.org/pesquisadores/dirk-erhard/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2021/10/Erhard-fundo-neutro-300x300.png",
    "projeto": "A universalidade por trás de processos aleatórios (2021)"
  },
  {
    "nome": "Elisa Ferreira",
    "href": "https://serrapilheira.org/pesquisadores/elisa-ferreira/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2021/10/ElisaFerreira_2-300x300.png",
    "projeto": "Matéria escura ultrafria: o lado leve e fuzzy do universo (2021)"
  },
  {
    "nome": "Instituto Steve Biko",
    "href": "https://serrapilheira.org/pesquisadores/oguntec/",
    "area": "\n            Diversidade na ciência        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Lazaro-cunha-300x300.png",
    "projeto": "Oguntec (2021)"
  },
  {
    "nome": "Jefersson dos Santos",
    "href": "https://serrapilheira.org/pesquisadores/jefersson-dos-santos/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Jeffferson-300x300.png",
    "projeto": "Melhoramento da criação de mapas geográficos por imagens de satélite (2021)"
  },
  {
    "nome": "Luiz Augusto Campos",
    "href": "https://serrapilheira.org/pesquisadores/luiz-augusto-campos/",
    "area": "\n            Diversidade na ciência        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Luiz-Augusto-Campos-300x300.png",
    "projeto": "Diversidade na ciência brasileira (2021)"
  },
  {
    "nome": "Luiz Gustavo Gardinassi",
    "href": "https://serrapilheira.org/pesquisadores/luiz-gustavo-gardinassi/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Luiz-Gustavo-Gardinassi-300x300.png",
    "projeto": "O microbioma intestinal como eixo integrativo no desenvolvimento de tolerância à malária (2021)"
  },
  {
    "nome": "Mychael Lourenço",
    "href": "https://serrapilheira.org/pesquisadores/mychael-lourenco/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Mychael-Lourenco-300x300.png",
    "projeto": "Como a produção de novas proteínas contribui para o funcionamento do cérebro? (2021)"
  },
  {
    "nome": "Rafael Montezuma",
    "href": "https://serrapilheira.org/pesquisadores/rafael-montezuma/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Rafael-Montezuma-300x300.png",
    "projeto": "Métodos para controlar e classificar as superfícies mínimas (2021)"
  },
  {
    "nome": "Raul Costa-Pereira",
    "href": "https://serrapilheira.org/pesquisadores/raul-costa-pereira/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Raul-Cosya-300x300.png",
    "projeto": "Ecos da diversidade social e desigualdade na biodiversidade (2021)"
  },
  {
    "nome": "Thiago Fleury",
    "href": "https://serrapilheira.org/pesquisadores/thiago-fleury/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Thiago-Fleury-300x300.png",
    "projeto": "Compreendendo o fenômeno holográfico na gravidade quântica (2021)"
  },
  {
    "nome": "Vinícius Ribau Mendes",
    "href": "https://serrapilheira.org/pesquisadores/vinicius-ribau-mendes/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Vinicius-Ribau-300x300.png",
    "projeto": "Influência do colapso da CRMA sobre a precipitação sulamericana (2021)"
  },
  {
    "nome": "Alexandre Souza",
    "href": "https://serrapilheira.org/pesquisadores/alexandre-souza/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/alexandre-300x300.png",
    "projeto": "Investigação em laboratório sobre a síntese de moléculas orgânicas complexas por radiação ionizante no meio interestelar (2020)"
  },
  {
    "nome": "Amílcar Tanuri",
    "href": "https://serrapilheira.org/pesquisadores/amilcar-tanuri/",
    "area": "\n            Covid-19        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/06/tanuri-300x300.png",
    "projeto": "Resposta imune ao SARS-CoV-2 em pacientes brasileiros: uma base sólida para ajudar a diagnosticar e tratar infectados por Covid-19 (2020)"
  },
  {
    "nome": "Angélica Thomaz Vieira",
    "href": "https://serrapilheira.org/pesquisadores/angelica-thomaz-vieira/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/angelica-1-300x300.png",
    "projeto": "Alterações na microbiota intestinal contribuem para a seleção e disseminação de resistência antimicrobiana (2020)"
  },
  {
    "nome": "Cecilia Siliansky de Andreazzi",
    "href": "https://serrapilheira.org/pesquisadores/cecilia-siliansky-de-andreazzi/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/cecilia-300x300.png",
    "projeto": "Ecologia de meta-comunidades de doenças: movendo do efeito diluidor para paisagens diluidoras (2020)"
  },
  {
    "nome": "Daniel Valente",
    "href": "https://serrapilheira.org/pesquisadores/daniel-valente/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/daniel-300x300.png",
    "projeto": "Princípios físicos do comportamento vivo (2020)"
  },
  {
    "nome": "Danilo Neves",
    "href": "https://serrapilheira.org/pesquisadores/danilo-neves/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Danilo-Neves-300x300.png",
    "projeto": "Evolução de nicho em biomas tropicais e suas consequências (2020)"
  },
  {
    "nome": "Eduardo Zimmer",
    "href": "https://serrapilheira.org/pesquisadores/eduardo-zimmer/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/Task_2_foto_Serrapilheira-300x300.jpg",
    "projeto": "As origens da vulnerabilidade e resistência à neurodegeneração em mamíferos (2020)"
  },
  {
    "nome": "EPICOVID-19",
    "href": "https://serrapilheira.org/pesquisadores/epicovid-19/",
    "area": "\n            Covid-19        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/05/hallal-300x300.png",
    "projeto": "Evolução da prevalência de infecção por Covid-19 no Rio Grande do Sul: estudo de base populacional (2020)"
  },
  {
    "nome": "Fabio Mendonça Gomes",
    "href": "https://serrapilheira.org/pesquisadores/fabio-mendonca-gomes/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/fabio-300x300.png",
    "projeto": "Efeito de malnutrição em vertebrados na competência vetorial de Aedes aegypti (2020)"
  },
  {
    "nome": "Fabrício Caxito",
    "href": "https://serrapilheira.org/pesquisadores/fabricio-caxito/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2022/09/Fabricio-Caxito-300x300.png",
    "projeto": "Projeto MOBILE: cadeias de montanhas e o aparecimento de vida complexa na Terra (2020)"
  },
  {
    "nome": "Farinaldo Queiroz",
    "href": "https://serrapilheira.org/pesquisadores/farinaldo-queiroz/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/Farinaldo-300x300.png",
    "projeto": "O Universo é escuro (2020)"
  },
  {
    "nome": "Fernanda Gervasoni",
    "href": "https://serrapilheira.org/pesquisadores/fernanda-gervasoni/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/fernnda-300x300.png",
    "projeto": "Voláteis e sua influência no manto terrestre abaixo da região Centro-Oeste do Brasil registradas em inclusões de minerais primários e acessórios em rochas alcalinas (2020)"
  },
  {
    "nome": "Frederico Henning",
    "href": "https://serrapilheira.org/pesquisadores/frederico-henning/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/frederico-300x300.png",
    "projeto": "A evolução é previsível? Sobre as causas proximais da convergência evolutiva e suas relações com a origem da biodiversidade (2020)"
  },
  {
    "nome": "Igor Dantas Miranda",
    "href": "https://serrapilheira.org/pesquisadores/igor-dantas-miranda/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/igor-300x300.png",
    "projeto": "Supersensores minimalistas: algoritmos e arquiteturas de hardware para arranjos de sensores de 1 bit (2020)"
  },
  {
    "nome": "María Amelia Salazar",
    "href": "https://serrapilheira.org/pesquisadores/maria-amelia-salazar/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/maria-amelia-300x300.png",
    "projeto": "Grupóides e algebróides de Lie: teoria estrutural e aplicações (2020)"
  },
  {
    "nome": "Marina Hirota",
    "href": "https://serrapilheira.org/pesquisadores/marina-hirota/",
    "area": "\n            Ciências da Vida / Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Marina-Hirota-300x300.jpg",
    "projeto": "VulnerAmazon: biodiversidade amazônica e resiliência às alterações no regime de chuvas (2020)"
  },
  {
    "nome": "Matias Delgadino",
    "href": "https://serrapilheira.org/pesquisadores/matias-delgadino/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/matias-300x300.png",
    "projeto": "Descrições estatísticas de longo tempo de sistemas de partículas em interação e flutuações em torno de seu limite termodinâmico (2020)"
  },
  {
    "nome": "Murilo Santhiago",
    "href": "https://serrapilheira.org/pesquisadores/murilo-santhiago/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/murilo-300x300.png",
    "projeto": "Compreendendo defeitos químicos no plano basal de materiais 2D em direção a reação de evolução de hidrogênio (2020)"
  },
  {
    "nome": "Renata Nagai",
    "href": "https://serrapilheira.org/pesquisadores/renata-nagai/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/renata-300x300.png",
    "projeto": "O passado do Oceano Atlântico Sudoeste e perspectivas sobre as mudanças climáticas futuras (2020)"
  },
  {
    "nome": "Ricardo Cerri",
    "href": "https://serrapilheira.org/pesquisadores/ricardo-cerri/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/cerri-300x300.png",
    "projeto": "Evolução automática de redes neurais profundas (2020)"
  },
  {
    "nome": "Ricardo Martinez-García",
    "href": "https://serrapilheira.org/pesquisadores/ricardo-martinez-garcia/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/nsmail-300x291.png",
    "projeto": "Compreendendo a ecologia e evolução de comportamentos sociais microbianos em ambientes turbulentos: cooperação como um estudo de caso (2020)"
  },
  {
    "nome": "Rodrigo Barros",
    "href": "https://serrapilheira.org/pesquisadores/rodrigo-barros/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/rodrigo-300x300.png",
    "projeto": "IA para o bem-estar social: construção de redes neurais justas, explicáveis, resistentes a fatores de confusão e com supervisão limitada (2020)"
  },
  {
    "nome": "Tiago Gräf",
    "href": "https://serrapilheira.org/pesquisadores/tiago-graf/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/tiago-300x300.png",
    "projeto": "Identificação de vírus neuroinvasivos em casos de encefalite aguda no nordeste do Brasil (2020)"
  },
  {
    "nome": "Tiago Pereira da Silva",
    "href": "https://serrapilheira.org/pesquisadores/tiago-pereira-da-silva/",
    "area": "\n            Covid-19 / Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Tiago-Pereira-da-Silva-300x300.jpg",
    "projeto": "ModCovid19 (2020)"
  },
  {
    "nome": "Vânia Pankievicz",
    "href": "https://serrapilheira.org/pesquisadores/vania-pankievicz/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/07/vania2-300x300.png",
    "projeto": "Entendendo o papel do microbioma no fluxo de nitrogênio de solos sustentáveis, acoplando sequenciamento de DNA e estudo de isótopo estável 15N (2020)"
  },
  {
    "nome": "Yuri Gomes Lima",
    "href": "https://serrapilheira.org/pesquisadores/yuri-gomes-lima/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Yuri-Gomes-Lima-300x300.jpg",
    "projeto": "Jangada Dinâmica (2020)"
  },
  {
    "nome": "Ana C. Takakura",
    "href": "https://serrapilheira.org/pesquisadores/ana-c-takakura/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_ana-c-takakura-300x300.jpg",
    "projeto": "Explorando a associação entre alterações respiratórias neuronais e funcionais na Doença de Parkinson (2019)"
  },
  {
    "nome": "Bruno Zatt",
    "href": "https://serrapilheira.org/pesquisadores/bruno-zatt/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/10/pesq_bruno-zatt-300x300.jpg",
    "projeto": "Compressão de Light Fields: permitindo Multimídia Imersiva por meio de Realidades Aumentada e Mista (2019)"
  },
  {
    "nome": "Daniel Furtado Leite",
    "href": "https://serrapilheira.org/pesquisadores/daniel-leite/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Daniel-Leite2-1-300x300.jpg",
    "projeto": "Similaridade, agregação e aprendizado de fluxos de dados heterogêneos: em direção a uma maior autonomia e flexibilidade da inteligência artificial (2019)"
  },
  {
    "nome": "Danielle da Silva Trentin",
    "href": "https://serrapilheira.org/pesquisadores/danielle-da-silva-trentin/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_danielle-da-silva-trentin-300x300.jpg",
    "projeto": "Como as larvas de Galleria mellonella degradam o plástico sintético? (2019)"
  },
  {
    "nome": "Edgard Pimentel",
    "href": "https://serrapilheira.org/pesquisadores/edgard-pimentel/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Edgard-Pimentel2-300x300.jpg",
    "projeto": "Teoria de regularidade para equações diferenciais parciais (2019)"
  },
  {
    "nome": "Fernanda Antunes Carvalho",
    "href": "https://serrapilheira.org/pesquisadores/fernanda-antunes-carvalho/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_fernanda-antunes-carvalho-300x300.jpg",
    "projeto": "Compreendendo a interação planta-polinizador no Cerrado com DNA-metabarcoding (2019)"
  },
  {
    "nome": "Fernanda Werneck",
    "href": "https://serrapilheira.org/pesquisadores/fernanda-werneck/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_fernanda-werneck.jpg",
    "projeto": "Os impactos das mudanças climáticas na megadiversidade Neotropical (2019)"
  },
  {
    "nome": "Gonçalo Oliveira",
    "href": "https://serrapilheira.org/pesquisadores/goncalo-oliveira/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Gonçalo-Oliveira1-300x300.jpg",
    "projeto": "Teoria do Calibre e Holonomia Especial (2019)"
  },
  {
    "nome": "João Batista Florindo",
    "href": "https://serrapilheira.org/pesquisadores/joao-batista-florindo/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/João-Florindo1-300x300.jpg",
    "projeto": "Uso da teoria do caos e análise de imagens para avaliar e prever a evolução de carcinomas severos (2019)"
  },
  {
    "nome": "José Henrique Oliveira",
    "href": "https://serrapilheira.org/pesquisadores/jose-henrique-oliveira/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/José-Henrique1-300x300.jpg",
    "projeto": "Entendendo como mosquitos infectados pelo vírus da Dengue nunca ficam doentes (2019)"
  },
  {
    "nome": "Juliana Camacho",
    "href": "https://serrapilheira.org/pesquisadores/juliana-camacho/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_juliana-camacho-300x300.jpg",
    "projeto": "Investigação do CD38 como um novo alvo promissor para revelar moduladores seguros na dor neuropática (2019)"
  },
  {
    "nome": "Luciana Luna Anna Lomonaco",
    "href": "https://serrapilheira.org/pesquisadores/luciana-luna-anna-lomonaco/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_luciana-luna-anna-lomonaco-300x300.jpg",
    "projeto": "O conjunto de Mandelbrot e suas cópias (2019)"
  },
  {
    "nome": "Luiz Eduardo Del-Bem",
    "href": "https://serrapilheira.org/pesquisadores/luiz-eduardo-del-bem/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Luiz-Eduardo-Del-Bem2-300x300.jpg",
    "projeto": "As origens da vida em terra firme: como algas terrestres microscópicas criaram os solos do planeta e deram origem às plantas terrestres (2019)"
  },
  {
    "nome": "Marco Aurelio Liutheviciene Cordeiro",
    "href": "https://serrapilheira.org/pesquisadores/marco-aurelio-liutheviciene-cordeiro/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_marco-aurelio-liutheviciene-cordeiro-300x300.jpg",
    "projeto": "Engenharia de Contorno de Grão (2019)"
  },
  {
    "nome": "Nicolás Stríkis",
    "href": "https://serrapilheira.org/pesquisadores/nicolas-strikis/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Nicolás-Strikis2-300x300.jpg",
    "projeto": "Projeto Inversão: Estamos caminhando para uma inversão do campo magnético da Terra? (2019)"
  },
  {
    "nome": "Paulo Teixeira",
    "href": "https://serrapilheira.org/pesquisadores/paulo-teixeira/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Paulo-Teixeira2-300x300.jpg",
    "projeto": "Doenças são a exceção e não a regra: Por que as plantas são imunes à maioria dos patógenos? (2019)"
  },
  {
    "nome": "Pedro Val",
    "href": "https://serrapilheira.org/pesquisadores/pedro-val/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Pedro-Val2-300x300.jpg",
    "projeto": "DELTA H (2023)"
  },
  {
    "nome": "Renato Ferreira de Velloso Vianna",
    "href": "https://serrapilheira.org/pesquisadores/renato-ferreira-de-velloso-vianna/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Renato2-300x300.jpg",
    "projeto": "Fibrações Lagrangianas em topologia simplética e mirror symmetry (2019)"
  },
  {
    "nome": "Thiago Rafael Fernandez Perez Tomei",
    "href": "https://serrapilheira.org/pesquisadores/thiago-rafael-fernandez-perez-tomei/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_thiago-rafael-fernandez-perez-tomei-300x300.jpg",
    "projeto": "Inteligência Artificial no Large Hadron Collider (2019)"
  },
  {
    "nome": "Tommaso Macrì",
    "href": "https://serrapilheira.org/pesquisadores/tommaso-macri/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_tommaso-macri-300x300.jpg",
    "projeto": "Simulação quântica com sistemas atômicos (2019)"
  },
  {
    "nome": "Ulisses Barres de Almeida",
    "href": "https://serrapilheira.org/pesquisadores/ulisses-barres-de-almeida/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2019/09/pesq_ulisses-barres-de-almeida-300x300.jpg",
    "projeto": "Astrofísica com multi-mensageiros e a origem dos raios cósmicos mais energéticos do universo (2019)"
  },
  {
    "nome": "Victor Sacek",
    "href": "https://serrapilheira.org/pesquisadores/victor-sacek/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Victor-Sacek2-300x300.jpg",
    "projeto": "Evolução paleogeográfica da Amazônia baseada em modelos numéricos geodinâmicos (2019)"
  },
  {
    "nome": "Wagner Araújo",
    "href": "https://serrapilheira.org/pesquisadores/wagner-araujo/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Wagner-Araújo1-300x300.jpg",
    "projeto": "Pontos de controle metabólicos e do DNA modulando a tolerância ao alumínio (2019)"
  },
  {
    "nome": "Adenilton José da Silva",
    "href": "https://serrapilheira.org/pesquisadores/adenilton-jose-da-silva/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/ade.jpg",
    "projeto": "Aprendizagem de máquina quântica: modelos e algoritmos de aprendizado (2018)"
  },
  {
    "nome": "Adriana Alves",
    "href": "https://serrapilheira.org/pesquisadores/adriana-alves/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Adriana-Alves-300x300.jpg",
    "projeto": "Quantificação dos potenciais impactos ambientais associados ao magmatismo da Província Magmática Paraná-Etendeka (2018)"
  },
  {
    "nome": "Alexander Birbrair",
    "href": "https://serrapilheira.org/pesquisadores/alexander-birbrair/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Alexander-Birbrair-300x300.jpg",
    "projeto": "Regulação do câncer de próstata pelo sistema nervoso periférico (2018)"
  },
  {
    "nome": "Alexandre Bruni-Cardoso",
    "href": "https://serrapilheira.org/pesquisadores/alexandre-bruni-cardoso/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Alexandre-Bruni-Cardoso-300x300.jpg",
    "projeto": "O que regula a quiescência celular? (2018)"
  },
  {
    "nome": "Alexandre José Tuoto Silveira Mello",
    "href": "https://serrapilheira.org/pesquisadores/alexandre-jose-tuoto-silveira-mello/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Alexandre-Mello-300x300.jpg",
    "projeto": "Desenvolvimento de técnicas para óptica adaptativa para uso em grandes telescópios (2018)"
  },
  {
    "nome": "Alexandre Zuquete Guarato",
    "href": "https://serrapilheira.org/pesquisadores/alexandre-zuquete-guarato/",
    "area": "\n            Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Alexandre-Zuquete-Guarato-300x300.jpg",
    "projeto": "Desenvolvimento de motor rotativo flex-fuel com taxa de compressão variável (2018)"
  },
  {
    "nome": "Ana Carolina Luchiari",
    "href": "https://serrapilheira.org/pesquisadores/ana-carolina-luchiari/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Ana-Luchiari-300x300.jpg",
    "projeto": "Peixes como nós: diferenças individuais no uso de álcool, consequências e tratamento (2018)"
  },
  {
    "nome": "Anderson de Oliveira Lobo",
    "href": "https://serrapilheira.org/pesquisadores/anderson-de-oliveira-lobo/",
    "area": "\n            Engenharia / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Anderson-Lobo-300x300.jpg",
    "projeto": "Desenvolvimento de uma biocaneta injetável com células para aplicação no reparo tecidual da cartilagem por meio da química click (2018)"
  },
  {
    "nome": "André Melro Murad",
    "href": "https://serrapilheira.org/pesquisadores/andre-melro-murad/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/André-Melro-mURAD-300x300.jpg",
    "projeto": "Desenho racional de inibidores enzimáticos (2018)"
  },
  {
    "nome": "Andreia Gerniski Macedo",
    "href": "https://serrapilheira.org/pesquisadores/andreia-gerniski-macedo/",
    "area": "\n            Engenharia / Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Andreia-Macedo-300x300.jpg",
    "projeto": "Estudo da correlação entre a estrutura e propriedades de nanomateriais de polímeros conjugados para produção de células solares de alta eficiência (2018)"
  },
  {
    "nome": "Ayla Sant’Ana da Silva",
    "href": "https://serrapilheira.org/pesquisadores/ayla-santana-da-silva/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Ayla-Sant-Ana-300x300.jpg",
    "projeto": "Rotas biotecnológicas para a conversão da semente de açaí (Euterpe oleracea) em energia e produtos com alto valor agregado (2018)"
  },
  {
    "nome": "Bernardo Strassburg",
    "href": "https://serrapilheira.org/pesquisadores/bernardo-strassburg/",
    "area": "\n            Ciências da Vida / Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Bernardo-Strassburg-300x300.jpg",
    "projeto": "Transformação positiva da Terra: iluminação, compreensão e otimização de múltiplas sinergias e trade-offs da restauração ecológica (2018)"
  },
  {
    "nome": "Bruno Mota",
    "href": "https://serrapilheira.org/pesquisadores/bruno-mota/",
    "area": "\n            Ciências da Vida / Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Bruno-Mota-300x300.jpg",
    "projeto": "As origens da forma biológica em Neurociência (2018)"
  },
  {
    "nome": "Bruss Lima",
    "href": "https://serrapilheira.org/pesquisadores/bruss-lima/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Bruss-Lima-300x300.jpg",
    "projeto": "Atividade oscilatória como um mecanismo integrativo no cérebro (2018)"
  },
  {
    "nome": "Caio Oliveira",
    "href": "https://serrapilheira.org/pesquisadores/caio-oliveira/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Caio-Oliveira-300x300.jpg",
    "projeto": "Novos complexos metálicos quirais e suas aplicações em catálise assimétrica (2018)"
  },
  {
    "nome": "Carlos Ganade",
    "href": "https://serrapilheira.org/pesquisadores/carlos-ganade/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Carlos-Gande-300x300.jpg",
    "projeto": "Superposição orogênica, nucleamento de zonas de cisalhamento e tectônica de escape no NE do Brasil (2018)"
  },
  {
    "nome": "Carlos Takeshi Hotta",
    "href": "https://serrapilheira.org/pesquisadores/carlos-takeshi-hotta/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Carlos-Hotta-300x300.jpg",
    "projeto": "Por que plantas que sabem as horas crescem melhor? (2018)"
  },
  {
    "nome": "Cecília Salgado Guimarães da Silva",
    "href": "https://serrapilheira.org/pesquisadores/cecilia-salgado-guimaraes-da-silva/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Cecilia-Salgado-300x300.jpg",
    "projeto": "Fibrações elípticas em geometria algébrica e aritmética (2018)"
  },
  {
    "nome": "Claudio Lucas Nunes de Oliveira",
    "href": "https://serrapilheira.org/pesquisadores/claudio-lucas-nunes-de-oliveira/",
    "area": "\n            Ciências da Vida / Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Claudio-Lucas-Oliveira-300x300.png",
    "projeto": "Desvendando a Física Celular (2018)"
  },
  {
    "nome": "Daniel Martins-de-Souza",
    "href": "https://serrapilheira.org/pesquisadores/daniel-martins-de-souza/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Daniel-Martins-de-Souza-300x300.jpg",
    "projeto": "Desenvolvimento de um teste preditivo da eficácia de antipsicóticos e a compreensão dos mecanismos biológicos da esquizofrenia (2018)"
  },
  {
    "nome": "Daniel Youssef Bargieri",
    "href": "https://serrapilheira.org/pesquisadores/daniel-youssef-bargieri/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Daniel-Bargieri-300x300.jpg",
    "projeto": "Procura de novos compostos com atividade de bloqueio de transmissão da malária (2018)"
  },
  {
    "nome": "Daniela Barretto Barbosa Trivella",
    "href": "https://serrapilheira.org/pesquisadores/daniela-barretto-barbosa-trivella/",
    "area": "\n            Ciência da Computação / Ciências da Vida / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Daniela-Trivella-300x300.jpg",
    "projeto": "NP3: plataforma computacional de interpretação iterativa de dados experimentais para a identificação rápida de novos produtos naturais bioativos (2018)"
  },
  {
    "nome": "David Montenegro Lapola",
    "href": "https://serrapilheira.org/pesquisadores/david-montenegro-lapola/",
    "area": "\n            Ciências da Vida / Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/David-Lapola-300x300.jpg",
    "projeto": "AmazonFACE: avaliação dos impactos do aumento de CO2 sobre a ecologia e resiliência da floresta Amazônica (2018)"
  },
  {
    "nome": "Denise Cavalcante Hissa",
    "href": "https://serrapilheira.org/pesquisadores/denise-cavalcante-hissa/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Denise-Hissa-300x300.jpg",
    "projeto": "Caracterização proteogenômica de ninhos de espuma de anuros para descrever sua estrutura biomolecular e identificar novas proteínas surfactantes (2018)"
  },
  {
    "nome": "Diego Andrés Laplagne",
    "href": "https://serrapilheira.org/pesquisadores/diego-andres-laplagne/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Diego-Laplagne-300x300.jpg",
    "projeto": "Relendo a mente: descobrindo correlatos neurais do comportamento natural (2018)"
  },
  {
    "nome": "Douglas Galante",
    "href": "https://serrapilheira.org/pesquisadores/douglas-galante/",
    "area": "\n            Ciências da Vida / Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Douglas-Galante-300x300.jpg",
    "projeto": "Ambiente marciano testado a partir de ambientes terrestres análogos e simulações experimentais (2018)"
  },
  {
    "nome": "Felipe Klein Ricachenevsky",
    "href": "https://serrapilheira.org/pesquisadores/felipe-klein-ricachenevsky/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Felipe-Ricachenevski-300x300.jpg",
    "projeto": "Análise da diversidade genética do arroz cultivado e selvagem tendo em vista a geração de grãos enriquecidos com ferro e zinco (2018)"
  },
  {
    "nome": "Francisco Sant’Anna",
    "href": "https://serrapilheira.org/pesquisadores/francisco-santanna/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Francisco-SantaAnna-300x300.jpg",
    "projeto": "Eficiência energética para software loT em larga escala (2018)"
  },
  {
    "nome": "Giovannia Araújo de Lima Pereira",
    "href": "https://serrapilheira.org/pesquisadores/giovannia-araujo-de-lima-pereira/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Giovania-Pereira-300x300.jpg",
    "projeto": "Síntese e caracterização fisico-química de nanoplataformas otimizadas baseadas em quantum dots I-VI (2018)"
  },
  {
    "nome": "Guilherme Ortigara Longo",
    "href": "https://serrapilheira.org/pesquisadores/guilherme-ortigara-longo/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Guilherme-Longo-300x300.jpg",
    "projeto": "Os recifes brasileiros estão prontos para as mudanças globais? (2018)"
  },
  {
    "nome": "Guilherme Zepon",
    "href": "https://serrapilheira.org/pesquisadores/guilherme-zepon/",
    "area": "\n            Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Guilherme-Zepon-300x300.jpg",
    "projeto": "Design de ligas de alta entropia para aplicação em armazenagem de hidrogênio (2018)"
  },
  {
    "nome": "Heverton Augusto Pereira",
    "href": "https://serrapilheira.org/pesquisadores/heverton-augusto-pereira/",
    "area": "\n            Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Heverton-Pereira-300x300.jpg",
    "projeto": "Desenvolvimento da próxima geração de inversores fotovoltaicos com técnicas avançadas de controle e capacidade de suporte ao sistema elétrico (2018)"
  },
  {
    "nome": "Ian Michael Trotter",
    "href": "https://serrapilheira.org/pesquisadores/ian-michael-trotter/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Ian-Trotter-300x300.jpg",
    "projeto": "A computação quântica pode quebrar “a maldição de Bellman”? (2018)"
  },
  {
    "nome": "Julia Pinheiro Chagas da Cunha",
    "href": "https://serrapilheira.org/pesquisadores/julia-pinheiro-chagas-da-cunha/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Julia-Cunha-300x300.jpg",
    "projeto": "Desvendando o epigenoma de um organismo simples ao longo da diferenciação celular: um atalho para entender questões epigenéticas centrais (2018)"
  },
  {
    "nome": "Karín Menéndez-Delmestre",
    "href": "https://serrapilheira.org/pesquisadores/karin-menendez-delmestre/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/karin.jpg",
    "projeto": "Matéria escura dentro e fora de galáxias: decifrando o enigma em pequenas e grandes escalas (2018)"
  },
  {
    "nome": "Katia Jasbinschek dos Reis Pinheiro",
    "href": "https://serrapilheira.org/pesquisadores/katia-jasbinschek-dos-reis-pinheiro/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Kátia-Pinheiro-300x300.jpg",
    "projeto": "Origem dinâmica dos impulsos da variação secular geomagnética no núcleo terrestre (2018)"
  },
  {
    "nome": "Leandro Vieira dos Santos",
    "href": "https://serrapilheira.org/pesquisadores/leandro-vieira-dos-santos/",
    "area": "\n            Ciências da Vida / Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Leandro-Vieira.jpg",
    "projeto": "Desenvolvimento de plataformas biológicas para produção de biocombustíveis e bioquímicos a partir de fontes renováveis de energia (2018)"
  },
  {
    "nome": "Luciana Pereira Rangel",
    "href": "https://serrapilheira.org/pesquisadores/luciana-pereira-rangel/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Luciana-Rangel-300x300.jpg",
    "projeto": "Agregação amilóide de p53 mutante: caracterização de seus efeitos celulares, interações proteicas, transmissão e relevância no contexto do câncer (2018)"
  },
  {
    "nome": "Marcelo Dal Bó",
    "href": "https://serrapilheira.org/pesquisadores/marcelo-dal-bo/",
    "area": "\n            Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Marcelo-Dal-bÓ-300x300.jpg",
    "projeto": "Têmpera química aplicada à fabricação industrial de porcelanatos (2018)"
  },
  {
    "nome": "Marco Antonio Zanata Alves",
    "href": "https://serrapilheira.org/pesquisadores/marco-antonio-zanata-alves/",
    "area": "\n            Ciência da Computação        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Marco-Antônio-Zanata-300x300.jpg",
    "projeto": "Memórias inteligentes eficientes para computação intensiva de dados (2018)"
  },
  {
    "nome": "Mario Leandro Aolita",
    "href": "https://serrapilheira.org/pesquisadores/mario-leandro-aolita/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/aolita-300x300.jpg",
    "projeto": "Redes quânticas não confiáveis (2018)"
  },
  {
    "nome": "Narcizo M. Souza Neto",
    "href": "https://serrapilheira.org/pesquisadores/narcizo-m-souza-neto/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Narcizo-Neto-300x300.jpg",
    "projeto": "Um olhar com raios X em supercondutividade (2018)"
  },
  {
    "nome": "Natan Silva Pereira",
    "href": "https://serrapilheira.org/pesquisadores/natan-silva-pereira/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Natan-Pereira-300x300.jpg",
    "projeto": "Registros geoquímicos com base em corais do oceano Atlântico Sul tropical: arquivos naturais de alta resolução para a compreensão das mudanças climáticas (2018)"
  },
  {
    "nome": "Omar Ginoble Pandoli",
    "href": "https://serrapilheira.org/pesquisadores/omar-ginoble-pandoli/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Omar-Pandoli-300x300.jpg",
    "projeto": "Bionanocompósito de bambu: um microrreator biomimético para síntese orgânica em fluxo contínuo (2018)"
  },
  {
    "nome": "Paulo Roberto Nassar de Carvalho",
    "href": "https://serrapilheira.org/pesquisadores/paulo-roberto-nassar-de-carvalho/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Paulo-Nassar-300x300.jpg",
    "projeto": "Cirurgia fetoscópica para o aprimoramento do prognóstico neurológico nos defeitos de tubo neural (2018)"
  },
  {
    "nome": "Pedro A. F. Galante",
    "href": "https://serrapilheira.org/pesquisadores/pedro-a-f-galante/",
    "area": "\n            Ciência da Computação / Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Pedro-Galante-300x300.jpg",
    "projeto": "Análise abrangente do papel das retrocópias de mRNAs como fonte de novos genes e funcionalidades genéticas (2018)"
  },
  {
    "nome": "Pedro Henrique Cury Camargo",
    "href": "https://serrapilheira.org/pesquisadores/pedro-henrique-cury-camargo/",
    "area": "\n            Engenharia / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Pedro-Camargo-300x300.jpg",
    "projeto": "Nanocatálise plasmônica: em direção a uma próxima geração de transformações moleculares sustentáveis (2018)"
  },
  {
    "nome": "Rafael Chaves",
    "href": "https://serrapilheira.org/pesquisadores/rafael-chaves/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Rafel-Chaves-300x300.jpg",
    "projeto": "Uma abordagem causal para a informação quântica (CausalQI) (2018)"
  },
  {
    "nome": "Rafael Silva",
    "href": "https://serrapilheira.org/pesquisadores/rafael-silva/",
    "area": "\n            Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Rafel-silva-300x300.jpg",
    "projeto": "Hidrogênio molecular a partir do tratamento de efluentes: um atalho para um futuro sustentável (2018)"
  },
  {
    "nome": "Rafael Victorio Carvalho Guido",
    "href": "https://serrapilheira.org/pesquisadores/rafael-victorio-carvalho-guido/",
    "area": "\n            Ciências da Vida / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Rafael-Guido-300x300.jpg",
    "projeto": "Estratégias em biologia estrutural e química medicinal na descoberta de inibidores para o desenvolvimento de novos candidatos a fármacos para o tratamento da malária (2018)"
  },
  {
    "nome": "Raquel Brandt Giordani",
    "href": "https://serrapilheira.org/pesquisadores/raquel-brandt-giordani/",
    "area": "\n            Ciências da Vida / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Raquel-Giordani-300x300.jpg",
    "projeto": "Identidade molecular da caatinga sob enfoque das tecnologias ômicas (2018)"
  },
  {
    "nome": "Renata Libonati dos Santos",
    "href": "https://serrapilheira.org/pesquisadores/renata-libonati-dos-santos/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Renata-Libonati-300x300.jpg",
    "projeto": "Inter-relações fogo–vegetação–atmosfera: compreendendo o regime de fogo na Amazônia e no Cerrado utilizando sensoriamento remoto (2018)"
  },
  {
    "nome": "Renata Piacentini Rodriguez",
    "href": "https://serrapilheira.org/pesquisadores/renata-piacentini-rodriguez/",
    "area": "\n            Ciências da Vida / Engenharia / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Renata-Piacentini-300x300.jpg",
    "projeto": "Dinâmica biogeoquímica do ferro e enxofre em biorreatores sulfetogênicos operados em baixo pH (2018)"
  },
  {
    "nome": "Rita de Cássia dos Anjos",
    "href": "https://serrapilheira.org/pesquisadores/rita-de-cassia-dos-anjos/",
    "area": "\n            Física        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Rita-dos-Anjos-300x300.jpg",
    "projeto": "A dinâmica de raios cósmicos de altas energias e buracos negros (2018)"
  },
  {
    "nome": "Roberto Braga Figueiredo",
    "href": "https://serrapilheira.org/pesquisadores/roberto-braga-figueiredo/",
    "area": "\n            Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Roberto-Braga-Figueiredo-300x300.jpg",
    "projeto": "Desenvolvimento de uma nova geração de compósitos de magnésio leves e biodegradáveis (2018)"
  },
  {
    "nome": "Rubens Lima do Monte Neto",
    "href": "https://serrapilheira.org/pesquisadores/rubens-lima-do-monte-neto/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Rubens-Monte-Neto-300x300.jpg",
    "projeto": "OmniBOX: dispositivo de baixo custo impresso em 3D e controlado por celular para o diagnóstico de doenças infecciosas (2018)"
  },
  {
    "nome": "Sidney Feitosa Gouveia",
    "href": "https://serrapilheira.org/pesquisadores/sidney-feitosa-gouveia/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Sidney-Gouveia-300x300.jpg",
    "projeto": "ECOFÍSICA – Abordando propriedades fundamentais da biodiversidade global (2018)"
  },
  {
    "nome": "Suzana de Fátima Alcantara",
    "href": "https://serrapilheira.org/pesquisadores/suzana-de-fatima-alcantara/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Suzana-Alcantra-300x300.jpg",
    "projeto": "Um sonho Darwiniano dentro de um pesadelo taxonômico: explorando radiações evolutivas para a prospecção de genes adaptáveis às mudanças climáticas em Velloziaceae (2018)"
  },
  {
    "nome": "Tarciso Velho",
    "href": "https://serrapilheira.org/pesquisadores/tarciso-velho/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Tarciso-Velho-300x300.jpg",
    "projeto": "Um sistema modular de linhagens transgênicas para modelar defeitos da fala e transtornos cerebrais em diamantes mandarins (2018)"
  },
  {
    "nome": "Thiago Mattar Cunha",
    "href": "https://serrapilheira.org/pesquisadores/thiago-mattar-cunha/",
    "area": "\n            Ciências da Vida        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Thiago-Cunha-300x300.jpg",
    "projeto": "Como o metabolismo celular afeta o desenvolvimento de dor neuropática: existe um papel para sinalização via succinato/GPR91? (2018)"
  },
  {
    "nome": "Thiago Vallin Spina",
    "href": "https://serrapilheira.org/pesquisadores/thiago-vallin-spina/",
    "area": "\n            Ciência da Computação / Engenharia        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Thiago-Vallin-Spina-300x300.jpg",
    "projeto": "Análise em tempo real de imagens 4D de grande porte de micro/nanotomografia para pesquisa em ciência do solo e engenharia de petróleo no Sirius, a nova fonte de luz síncrotron brasileira (2018)"
  },
  {
    "nome": "Tiago Jalowitzki",
    "href": "https://serrapilheira.org/pesquisadores/tiago-jalowitzki/",
    "area": "\n            Geociências        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Thiago-Jalow-300x300.jpg",
    "projeto": "Origem e evolução geoquímica, geocronológica e isotópica de fragmentos continentais e oceânicos do manto superior brasileiro (2018)"
  },
  {
    "nome": "Vilásia Martins",
    "href": "https://serrapilheira.org/pesquisadores/vilasia-martins/",
    "area": "\n            Ciências da Vida / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Vilásia-Martins-300x300.jpg",
    "projeto": "Estratégias para melhorar as propriedades de bioplásticos produzidos a partir de materiais sustentáveis (2018)"
  },
  {
    "nome": "Vinicius Ramos",
    "href": "https://serrapilheira.org/pesquisadores/vinicius-ramos/",
    "area": "\n            Matemática        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Vinicius-Ramos-300x300.jpg",
    "projeto": "Geometria simplética, dinâmica de contato e bilhares (2018)"
  },
  {
    "nome": "Virgínia Martins Carvalho",
    "href": "https://serrapilheira.org/pesquisadores/virginia-martins-carvalho/",
    "area": "\n            Ciências da Vida / Química        ",
    "img": "https://serrapilheira.wpenginepowered.com/wp-content/uploads/2020/03/Virginia-Carvalho-300x300.jpg",
    "projeto": "Padronização e controle de qualidade de matéria-prima para produção de produtos medicinais de Cannabis (2018)"
  }
]


function ordenaPorArea(pesquisadorA, pesquisadorB) {  
  var areaA = pesquisadorA.area.trim().toLowerCase();
  var areaB = pesquisadorB.area.trim().toLowerCase();
  
  if (areaA < areaB) return -1;
  if (areaA > areaB) return 1;
  return 0;
}

// Definição da função gerarListaHTML
function gerarListaHTML(scrap) {

  // Ordena a lista de pesquisadores por área
  scrap.sort(ordenaPorArea);

  var listaHTML = '<div class="row">';

  scrap.forEach(function(pesquisador) {
    listaHTML += '<div class="col-lg-3 col-md-4 col-sm-6">';
    listaHTML += '<div class="card">';
    listaHTML += '<img src="' + pesquisador.img + '" class="card-img-top" alt="' + pesquisador.nome + '">';
    listaHTML += '<div class="card-body">';
    listaHTML += '<h5 class="card-title">' + pesquisador.nome + '</h5>';
    listaHTML += '<p class="card-text">' + pesquisador.area.trim() + '</p>';
    listaHTML += '<p class="card-text">' + pesquisador.projeto + '</p>';
    listaHTML += '<a href="' + pesquisador.href + '" class="btn btn-primary">Detalhes</a>';
    listaHTML += '</div></div></div>';
  });

  listaHTML += '</div>';

  return listaHTML;
}

// Chamada da função e inserção do resultado no HTML
var listaHTML = gerarListaHTML(scrap);
document.getElementById("listaPesquisadores").innerHTML = listaHTML;
