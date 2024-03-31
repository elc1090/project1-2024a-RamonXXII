// Função para criar a lista de pesquisadores com base no filtro de pesquisa
import scrap from "./scrap.js";

function criarListaPesquisadores(filtro) {
    var listaPesquisadores = document.getElementById("listaPesquisadores");
    listaPesquisadores.innerHTML = ""; // Limpa a lista atual

    pesquisadores.forEach(function(pesquisador) {
        // Verifica se o filtro está vazio ou se a área de pesquisa do pesquisador corresponde ao filtro
        if (filtro === "" || pesquisador.area.toLowerCase().includes(filtro.toLowerCase())) {
            var listItem = document.createElement("li");
            listItem.textContent = pesquisador.nome + " - " + pesquisador.area;
            listaPesquisadores.appendChild(listItem);
        }
    });
}





function gerarListaHTML(scrap, filtro) {
    var pesquisadoresPorArea = {};
    var areas = []
    scrap.forEach(function(pesquisador) {
        var area = pesquisador.area.trim()
        // Verifica se a área já está presente no objeto pesquisadoresPorArea
        if (!pesquisadoresPorArea[area]) {
            pesquisadoresPorArea[area] = [];
        }
        // Adiciona o pesquisador à lista de pesquisadores correspondente à sua área
        pesquisadoresPorArea[area].push(pesquisador);
        if(area == filtro){
            areas.push(area.toLowerCase());
        }
    });
    var listaHTML = '';
    filtro = filtro.trim().toLowerCase();

    console.log(areas);
    console.log("filtro:",filtro);
    console.log(areas.includes(filtro));

    
    // Itera sobre as áreas únicas e cria um card para cada área
    Object.keys(pesquisadoresPorArea).forEach(function(area) {
        
        if(filtro===""|| area.toLowerCase().includes(filtro)){
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
        }
    });

    return listaHTML;


    scrap.forEach(function(pesquisador) {
        var area = pesquisador.area.trim().toLowerCase();
        filtro = filtro.trim().toLowerCase();
        
        // Verifica se o filtro está vazio ou se a área de pesquisa do pesquisador corresponde ao filtro
        if (filtro == "" || area.includes(filtro)) {
            listaHTML += '<div class="card mb-3">';
            listaHTML += '<div class="card-header"><h5 class="mb-0">' + pesquisador.area + '</h5></div>';
            listaHTML += '<div class="card-body">';

            listaHTML += '<div class="row">';
            listaHTML += '<div class="col-lg-3 col-md-4 col-sm-6 mb-3">';
            listaHTML += '<div class="card">';
            listaHTML += '<img src="' + pesquisador.img + '" class="card-img-top" alt="' + pesquisador.nome + '" title="' + pesquisador.nome + '">';
            listaHTML += '<div class="card-body">';
            listaHTML += '<h5 class="card-title">' + pesquisador.nome + '</h5>';
            listaHTML += '<p class="card-text">' + pesquisador.projeto + '</p>';
            listaHTML += '<a href="' + pesquisador.href + '" class="btn btn-primary">Detalhes</a>';
            listaHTML += '</div></div></div></div></div></div>';
        }
    });

    return listaHTML;
}

// Função para atualizar a lista de pesquisadores com base no filtro de pesquisa
function atualizarListaPesquisadores(scrap, filtro) {
    var listaHTML = gerarListaHTML(scrap, filtro);
    document.getElementById("listaPesquisadores").innerHTML = listaHTML;
}

// Evento de input no campo de filtro
document.getElementById("filtroPesquisa").addEventListener("input", function() {
    var filtro = this.value;
    console.log("filtro atual:",filtro);
    atualizarListaPesquisadores(scrap, filtro);
});


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

// Chamada inicial para exibir a lista completa de pesquisadores
atualizarListaPesquisadores(scrap, "");

