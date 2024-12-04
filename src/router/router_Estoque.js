import express from 'express';
const router = express.Router();
import { inserirProduto,buscarTodosProdutos,saidaEstoque} from '../controller/produtoController.js';

router.get('/estoque',buscarTodosProdutos)

router.post('/saida-estoque', saidaEstoque)

router.post('/cadastro', inserirProduto)





export default router;