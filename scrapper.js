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