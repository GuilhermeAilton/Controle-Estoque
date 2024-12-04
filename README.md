# Controle de Estoque

Este projeto foi desenvolvido para gerenciar o controle de estoque de produtos. Ele permite que os usuários registrem novos produtos, atualizem as informações existentes e registrem saídas de estoque. O sistema utiliza Node.js para o back-end, Sequelize para interação com o banco de dados MySQL e Bootstrap para a interface do usuário.

## Objetivo

O objetivo deste sistema é facilitar a gestão de produtos em estoque, oferecendo funcionalidades para:

- **Adicionar produtos**: Permite cadastrar novos produtos no estoque com informações como nome, quantidade, preço e categoria.
- **Exibir produtos**: Exibe uma lista de todos os produtos no estoque, com informações detalhadas.
- **Registrar saída de estoque**: Permite registrar a saída de produtos do estoque, ajustando a quantidade disponível de acordo com a saída.
- **Controle de quantidade**: Verifica se há quantidade suficiente de um produto no estoque antes de permitir a saída.

## Funcionalidades

### 1. Cadastro de Produtos
O sistema permite adicionar novos produtos ao estoque. Cada produto possui:
- Nome
- Quantidade
- Preço
- Categoria (eletrônicos, alimentos, vestuário, etc.)

### 2. Exibição de Estoque
Todos os produtos cadastrados são exibidos em uma tabela, com informações sobre:
- ID
- Nome do Produto
- Quantidade disponível
- Preço
- Categoria

### 3. Registro de Saída de Estoque
É possível registrar a saída de produtos do estoque, o que reduz a quantidade disponível. Ao registrar a saída, o sistema verifica se há quantidade suficiente no estoque e atualiza a quantidade do produto.

### 4. Atualização e Exclusão de Produtos
Os usuários podem editar ou excluir produtos do estoque, caso necessário.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript utilizado para rodar o servidor.
- **Express.js**: Framework para construção de APIs e gerenciamento de rotas.
- **Sequelize**: ORM utilizado para interagir com o banco de dados MySQL.
- **MySQL**: Banco de dados relacional utilizado para armazenar os produtos.
- **Bootstrap**: Framework CSS utilizado para o design da interface do usuário, garantindo que a aplicação seja responsiva.
- **EJS**: Motor de templates para renderização dinâmica das views.

## Pré-requisitos

Antes de rodar a aplicação, você precisa ter o seguinte instalado:

- **Node.js**: [Baixe o Node.js aqui](https://nodejs.org/)
- **MySQL**: [Baixe o MySQL aqui](https://dev.mysql.com/downloads/)

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/controle-estoque.git
   cd controle-estoque
