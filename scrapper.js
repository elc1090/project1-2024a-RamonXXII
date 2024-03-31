import scrap from './scrap.js';

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




function ordenaPorArea(pesquisadorA, pesquisadorB) {  
  var areaA = pesquisadorA.area.trim().toLowerCase();
  var areaB = pesquisadorB.area.trim().toLowerCase();
  
  if (areaA < areaB) return -1;
  if (areaA > areaB) return 1;
  return 0;
}

/*
// Definição da função gerarListaHTML
function geradasrListaHTML(scrap) {

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
*/

function gerarListaHTML(scrap) {
  // Cria um objeto para armazenar os pesquisadores por área
  var pesquisadoresPorArea = {};

  scrap.forEach(function(pesquisador) {
      var area = pesquisador.area.trim()
      // Verifica se a área já está presente no objeto pesquisadoresPorArea
      if (!pesquisadoresPorArea[area]) {
          pesquisadoresPorArea[area] = [];
      }
      // Adiciona o pesquisador à lista de pesquisadores correspondente à sua área
      pesquisadoresPorArea[area].push(pesquisador);
  });

  var listaHTML = '';

  // Itera sobre as áreas únicas e cria um card para cada área
  Object.keys(pesquisadoresPorArea).forEach(function(area) {
      listaHTML += '<div class="card">';
      listaHTML += '<div class="card-header"><b>' + area + '</b></div>';
      listaHTML += '<div class="card-body">';
      listaHTML += '<div class="row">';


      pesquisadoresPorArea[area].forEach(function(pesquisador) {
        listaHTML += '<div class="col col-lg-3 col-md-4 col-sm-6">';
        listaHTML += '<div class="card">';
        listaHTML += '<img src="' + pesquisador.img + '" class="card-img-top" alt="' + pesquisador.nome + '" title="' + pesquisador.nome + '" >';
        listaHTML += '<div class="card-body">';
        listaHTML += '<h5 class="card-title">' + pesquisador.nome + '</h5>';
        listaHTML += '<p class="card-text">' + pesquisador.projeto + '</p>';
        listaHTML += '<a href="' + pesquisador.href + '" class="btn btn-primary">Detalhes</a>';
        listaHTML += '</div></div></div>';
      });
      listaHTML += '</div></div></div>';
  });

  return listaHTML;
}


// Chamada da função e inserção do resultado no HTML
var listaHTML = gerarListaHTML(scrap);
document.getElementById("listaPesquisadores").innerHTML = listaHTML;

document.addEventListener("DOMContentLoaded", function() {
  var btnScrollToTop = document.getElementById("btnScrollToTop");

  // Adiciona um evento de clique ao botão
  btnScrollToTop.addEventListener("click", function() {
      // Faz a rolagem suave para o topo da página
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});
