function calcularMulta(diasAtraso, valorPorDia) {

    const parametrosValidos =
        typeof diasAtraso === "number" &&
        typeof valorPorDia === "number" &&
        Number.isFinite(diasAtraso) &&
        Number.isFinite(valorPorDia);

    if (!parametrosValidos) {
        throw new Error("Os parâmetros devem ser números válidos");
    }

    if (diasAtraso < 0 || valorPorDia < 0) {
        throw new Error("Os valores não podem ser negativos");
    }

    return diasAtraso * valorPorDia;
}

module.exports = { calcularMulta };