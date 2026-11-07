const { calcularMulta } = require("../src/renewal");

describe("calcularMulta", () => {

    test("deve calcular a multa de acordo com os dias de atraso", () => {
      expect(calcularMulta(5,2)).toBe(10);
    });

    test("nao deve cobrar multa quando nao houver atraso", ()=> {
        expect(calcularMulta(0,2)).toBe(0)
    })

    test("deve rejeitar quantidade negativa de dias de atraso", ()=> {
        expect(()=> calcularMulta(-3,2)).toThrow();
    })
    test("deve rejeitar valor negativo da multa de atraso", ()=> {
        expect(()=> calcularMulta(3,-2)).toThrow();
    })

    test("deve rejeitar dias de atraso que não sejam números", () => {
    expect(() => calcularMulta("cinco", 2)).toThrow();
});
test("deve rejeitar valor da multa que não seja numérico", () => {
    expect(() => calcularMulta(5, "dois")).toThrow();
});






});