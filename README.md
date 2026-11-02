# Código confiável na era da IA

Projeto prático do minicurso **Código confiável na era da IA: TDD, testes e CI**.

Neste projeto, vamos desenvolver uma pequena lógica de empréstimos de livros para praticar:

- Testes automatizados com Jest;
- TDD (Test-Driven Development);
- Ciclo Red, Green e Refactor;
- Integração Contínua (CI) com GitHub Actions;
- Pull Requests e revisão de código;
- Uso responsável da Inteligência Artificial no desenvolvimento.

## Objetivo

Construir uma função que valide se um usuário pode realizar um empréstimo de livro, aplicando regras de negócio e testes automatizados.

## Regras de negócio

Um empréstimo só poderá ser realizado quando:

1. O usuário estiver cadastrado;
2. O usuário não possuir empréstimos atrasados;
3. O usuário possuir menos de três empréstimos ativos;
4. O livro estiver disponível.

## Tecnologias

- JavaScript
- Node.js
- Jest
- GitHub
- GitHub Actions
- GitHub Codespaces

## Como executar

Após configurar o ambiente, instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

## Metodologia

O desenvolvimento seguirá o ciclo TDD:

- **Red:** escrever um teste e observar sua falha;
- **Green:** implementar o mínimo necessário para passar;
- **Refactor:** melhorar o código mantendo os testes funcionando.

## Integração Contínua

O GitHub Actions será configurado para executar os testes automaticamente sempre que um Pull Request for aberto ou atualizado em direção à branch `main`.

---

Projeto desenvolvido para fins educacionais.
