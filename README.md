# Testes de API - PetStore

Projeto de automação de testes de API desenvolvido com **Playwright** e JavaScript, utilizando a API Swagger PetStore.

## Objetivo

Validar as operações de cadastro de animais, cadastro de usuários, criação de ordens de venda e consultas dos dados após a transação.

## Tecnologias utilizadas

- JavaScript
- Playwright
- Node.js
- Swagger PetStore API

## Cenários automatizados

1. Cadastro do animal Bichento.
2. Cadastro da usuária Hermione Granger.
3. Criação da ordem de venda do Bichento.
4. Consulta do status do animal após a venda.
5. Consulta da ordem de venda.
6. Consulta da usuária cadastrada.

## Como executar o projeto

**1.** Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

**2.** Acesse a pasta do projeto:

```bash
cd PetstoreTests
```

**3.** Instale as dependências:

```bash
npm install
```

**4.** Execute os testes:

```bash
npx playwright test tests/petstore.spec.js
```

## Resultado dos testes

Na execução realizada durante o desenvolvimento, os 6 testes passaram com sucesso.

## Análise do item 4.6

Durante os testes, foi identificado que, mesmo após a criação da ordem de venda com status "placed" e campo "complete" igual a true, o status do animal permaneceu como "available".

Também foi observado que a ordem de venda não apresenta um campo para identificação do comprador, impossibilitando associar diretamente a venda à usuária Hermione Granger.

Esses comportamentos indicam limitações na consistência e na representação da transação de venda na API.