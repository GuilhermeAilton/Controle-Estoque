import { Sequelize } from "sequelize";
import sequelize from '../database/connection.js';  // Certifique-se de que o caminho está correto


export const Produto = sequelize.define('Produto', {
  nomeProduto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,  // Corrigido de INTERGER para INTEGER
    allowNull: false
  },
  preco:{
        type: Sequelize.FLOAT,  // Corrigido de INTERGER para INTEGER
        allowNull: false
 
  },
  categoria:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


Produto.sync({force:false})

