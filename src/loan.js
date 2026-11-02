function podeEmprestar(dados) {
    return (
        dados.cadastrado &&
        dados.emprestimosAtrasados === 0 &&
        dados.emprestimosAtivos < 3 &&
        dados.livroDisponivel
    );
}

module.exports = { podeEmprestar };