import express from 'express';
const router = express.Router();
import { inserirProduto,buscarTodosProdutos,saidaEstoque, excluirProduto, editarProduto, alterarProduto} from '../controller/produtoController.js';

router.get('/estoque',buscarTodosProdutos)

router.post('/saida-estoque', saidaEstoque)

router.post('/cadastro', inserirProduto)

router.post('/deletar', excluirProduto)


router.post('/editar',editarProduto)

router.post('/editar-produto',alterarProduto)



export default router;