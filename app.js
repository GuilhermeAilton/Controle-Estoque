import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routerEstoque from './src/router/router_Estoque.js'
import sequelize from './src/database/connection.js';
import { Produto } from './src/models/produto.js';

const app = express();


// Middleware para processar JSON no corpo da requisição
app.use(express.json());  // Para processar requisições com JSON
app.use(express.urlencoded({ extended: true }));  // Para processar formulários URL-encoded


// Substituir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar o EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Configurar arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerEstoque);


const testeConexao = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Conexaõ estabelecida com sucesso.');
        // Iniciar o servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
});

      } catch (error) {
        console.error('Error ao conectar ao banco de dados:', error);
      }

}

testeConexao();