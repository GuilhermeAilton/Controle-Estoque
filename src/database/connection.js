import { Sequelize } from "sequelize";


const sequelize = new Sequelize('sge', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: 'America/Sao_Paulo', // Definindo o fuso horário para o Brasilia

});   




export default sequelize