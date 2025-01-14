# PokemonApp

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.8.

## Versão da Aplicação

Versão atual: 1.0

## Funcionalidades

- Listagem de Pokémons
- Filtro de Pokémons por nome
- Ordenação da lista de Pokémons
- Paginação da lista de Pokémons
- Alteração do número de itens por página

## Dependências Necessárias

Para rodar a aplicação, você precisa instalar as seguintes dependências:

- Node.js (versão 18.18.0 ou superior)
- Angular CLI (versão 17.3.8 ou superior)
- Cypress (versão 13.17.0 ou superior)

## Comandos para Instalação

1. Instale as dependências do projeto:

   npm install

2. Instale o Angular CLI globalmente (se ainda não estiver instalado):

   npm install -g @angular/cli

3. Instale o Cypress:

   npm install --save-dev cypress

## Servidor de Desenvolvimento

1. Para iniciar o servidor de desenvolvimento, execute o comando:

   ng serve

2. Navegue para http://localhost:4200/. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Testes

1. Para executar os testes end-to-end via Cypress, execute:

   npx cypress open

2. Selecione o arquivo de teste pokemon-list.spec.js para rodar os testes.

Os testes end-to-end disponíveis incluem:

  - Verificação da exibição da lista de Pokémons
  - Filtragem da lista de Pokémons com base na entrada de pesquisa
  - Ordenação da lista de Pokémons em ordem decrescente
  - Alteração do número de itens por página
  - Navegação para a próxima página

Para obter mais ajuda sobre o Angular CLI, use "ng help" ou consulte a documentação do Angular CLI. 
