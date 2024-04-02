function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function obterFiltroPesquisa() {
    // Obtém o elemento de entrada de texto usando o ID
    let inputPesquisa = document.getElementById("filtroPesquisa");
    // Retorna o valor inserido na caixa de pesquisa
    return inputPesquisa.value;
}

function obterAnoSelecionado() {
    // Obtém o elemento do dropdown usando o ID
    let dropdownAno = document.getElementById("anoDropdown");
    // Retorna o valor selecionado no dropdown
    return dropdownAno.value;
}
export { removerAcentos,
    obterFiltroPesquisa,
    obterAnoSelecionado};