const { podeEmprestar } = require("../src/loan");

describe("podeEmprestar", () => {
    test("deve permitir emprestimo quando todas as condições são atendidas", () => {
        const usuario = {
            cadastrado: true,
            emprestimosAtrasados: 0,
            emprestimosAtivos: 1,
            livroDisponivel: true,
        };

        expect(podeEmprestar(usuario)).toBe(true);
    });
    test("não deve permitir empréstimo para usuário com pendências", () => {
    const usuario = {
        cadastrado: true,
        emprestimosAtrasados: 1,
        emprestimosAtivos: 0,
        livroDisponivel: true,
    };

    expect(podeEmprestar(usuario)).toBe(false);
});

test("não deve permitir empréstimo quando atingir o limite de três livros", () => {
    const usuario = {
        cadastrado: true,
        emprestimosAtrasados: 0,
        emprestimosAtivos: 3,
        livroDisponivel: true,
    };

    expect(podeEmprestar(usuario)).toBe(false);
});

test("não deve permitir empréstimo quando o livro não estiver disponível", () => {
    const usuario = {
        cadastrado: true,
        emprestimosAtrasados: 0,
        emprestimosAtivos: 0,
        livroDisponivel: false,
    };

    expect(podeEmprestar(usuario)).toBe(false);
});
test("não deve permitir empréstimo para usuário não cadastrado", () => {
    const usuario = {
        cadastrado: false,
        emprestimosAtrasados: 0,
        emprestimosAtivos: 0,
        livroDisponivel: true,
    };

    expect(podeEmprestar(usuario)).toBe(false);
});
});