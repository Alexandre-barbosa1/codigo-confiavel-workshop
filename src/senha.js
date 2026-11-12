function senhaValida(senha){
    return (
        senha.length >= 8 &&
        /\d/.test(senha)
    );
}

module.exports = senhaValida;