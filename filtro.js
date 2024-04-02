import scrap from "./scrap.js";
import { removerAcentos, obterFiltroPesquisa, obterAnoSelecionado } from "./utils.js";

function gerarListaHTML(scrap, { pesquisa, anoSelecionado }) {
    
    //var pesquisa = obterFiltroPesquisa();
    anoSelecionado = obterAnoSelecionado();
    
    let pesquisadoresPorArea = {};
    scrap.forEach(function(pesquisador) {
        let area = pesquisador.area.trim()
        // Verifica se a área já está presente no objeto pesquisadoresPorArea
        if (!pesquisadoresPorArea[area]) {
            pesquisadoresPorArea[area] = [];
        }
        // Adiciona o pesquisador à lista de pesquisadores correspondente à sua área
        pesquisadoresPorArea[area].push(pesquisador);
        
    });

    var listaHTML = '';
    pesquisa = pesquisa.trim().toLowerCase();

    // Itera sobre as áreas únicas e cria um card para cada área
    Object.keys(pesquisadoresPorArea).forEach(function(area) {
        var Newarea = removerAcentos(area.toLowerCase());
        // se o filtro de pesquisa for vazio ou se a área do card contiver a substring do filtro de pesquisa
        if(pesquisa==="" || Newarea.includes(pesquisa)){
            listaHTML += '<div class="card">';
            listaHTML += '<div class="card-header"><b>' + area + '</b></div>';
            listaHTML += '<div class="card-body">';
            listaHTML += '<div class="row">';

            pesquisadoresPorArea[area].forEach(function(pesquisador) {
                // se o ano selecionado for vazio ou se o projeto do pesquisador contiver a substring relativa ao ano selecionado
                if(anoSelecionado==="" || pesquisador.projeto.trim().includes(anoSelecionado)){
                    listaHTML += '<div class="col col-lg-3 col-md-4 col-sm-6">';
                    listaHTML += '<div class="card">';
                    listaHTML += '<img src="' + pesquisador.img + '" class="card-img-top" alt="' + pesquisador.nome + '" title="' + pesquisador.nome + '" >';
                    listaHTML += '<div class="card-body">';
                    listaHTML += '<h5 class="card-title">' + pesquisador.nome + '</h5>';
                    listaHTML += '<p class="card-text">' + pesquisador.projeto + '</p>';
                    listaHTML += '<a href="' + pesquisador.href + '" class="btn btn-primary">Detalhes</a>';
                    listaHTML += '</div></div></div>';
                }
            });
            listaHTML += '</div></div></div>';
        }
    });

    document.getElementById("listaPesquisadores").innerHTML = listaHTML;

}
// Evento de input no campo de filtro
document.getElementById("filtroPesquisa").addEventListener("input", function() {
    let pesquisa = this.value;
    let anoSelecionado = obterAnoSelecionado();
    gerarListaHTML(scrap, { pesquisa: pesquisa, ano: anoSelecionado });
});

document.getElementById("btnScrollToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Adicione um ouvinte de evento ao dropdown para detectar quando o valor é alterado
document.getElementById("anoDropdown").addEventListener("change", function() {
    // Obtém o valor selecionado do dropdown
    let anoSelecionado = this.value;
    let filtroPesquisa = obterFiltroPesquisa();
    // Chama a função gerarListaHTML 
    gerarListaHTML(scrap, { pesquisa: filtroPesquisa, ano: anoSelecionado });
});

// Chamada inicial para exibir a lista completa de pesquisadores
gerarListaHTML(scrap, { pesquisa: "", ano: ""});

