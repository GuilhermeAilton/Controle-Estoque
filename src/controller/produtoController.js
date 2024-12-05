// src/controllers/produtoController.js
import {Produto} from '../models/produto.js';

 export const inserirProduto = async (req, res) => {
  try {
    const { nomeProduto, quantidade, preco,categoria } = req.body;

    // Validação simples
    if (!nomeProduto || !quantidade || !preco) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    
    // Converter a quantidade para um número inteiro
    let quantidadeProduto = Number(quantidade); // Usando Number() para garantir que seja um número
    // Verifique se o produto já existe
    const produtoExistente = await Produto.findOne({
      where: { nomeProduto }
    });

    if (produtoExistente) {
      // Se o produto já existe, aumente a quantidade
      const novaQuantidade = produtoExistente.quantidade + quantidadeProduto
      produtoExistente.quantidade = novaQuantidade;

      // Salve a atualização
      await produtoExistente.save();
      res.redirect('/estoque')
     
    } else {
      // Se o produto não existe, crie um novo
      const novoProduto = await Produto.create({
        nomeProduto,
        quantidade,
        preco,
        categoria

      });

      res.redirect('/estoque')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao inserir ou atualizar o produto', error: error.message });
  }
};

export const buscarTodosProdutos = async (req, res) => {
  try {
    // Buscar todos os produtos no banco
    const produtos = await Produto.findAll();

    // Verificar se há produtos
    if (produtos.length === 0) {
      console.log(produtos)
      return res.status(404).render('estoque', { produtos:produtos });
    }

    // Renderizar a view 'produtos' passando os produtos como dados
    return res.render('estoque', { produtos:produtos });
  } catch (error) {
    console.error(error);
    return res.status(500).render('estoque', { mensagem: 'Erro ao buscar os produtos', error: error.message });
  }
};



export const saidaEstoque = async (req, res) => {
  try {
    const { produtoId, quantidadeSaida } = req.body;

    // Buscar o produto no banco de dados
    const produtoAtual = await Produto.findOne({
      where: { id: produtoId }
    });

    if (!produtoAtual) {
      return res.status(404).render('estoque', { mensagem: 'Produto não encontrado.' });
    }

    // Converter a quantidade de saída para número
    let quantidadeProduto = Number(quantidadeSaida);

    // Verificar se há quantidade suficiente no estoque
    if (produtoAtual.quantidade < quantidadeProduto) {
      return res.json({
        message:"Quantidade insuficiente no estoque"
      });
    }

    // Atualizar o estoque
    produtoAtual.quantidade -= quantidadeProduto;
    await produtoAtual.save();
    console.log(produtoAtual); // Verifique os dados do produtoAtual
    // Passar a variável para a view
    res.redirect('estoque')
  } catch (error) {
    console.log(error);
    res.status(500).render('estoque', { mensagem: 'Erro ao processar a saída de estoque.', error: error.message });
  }
};

 


export const excluirProduto = async (req, res) =>  {

  try{
    const {produtoId} = req.body
    console.log(produtoId)
  
     await Produto.destroy({
      where:{id : produtoId}
    })
     
    // Resetando o AUTO_INCREMENT
    await Produto.sequelize.query('ALTER TABLE produtos AUTO_INCREMENT = 1');

      console.log("Produto excluido")
      res.redirect('estoque')

  }catch(error){
    console.log(error)

  }
 

}


export const editarProduto = async (req, res) =>  {

  try{
    const {produtoId} = req.body
    console.log(produtoId)
  
    const produto =  await Produto.findOne({
      where:{id : produtoId}
    })
     
      console.log("Produto", produto)
      res.render('editarProduto',{produto:produto})

  }catch(error){
    console.log(error)

  }
} 


export const alterarProduto = async (req, res) =>  {
  try {
    const { id, nomeProduto, quantidade, preco, categoria } = req.body;

    // Encontrando o produto no banco de dados pelo id
    const produto = await Produto.findByPk(id);

    // Se o produto não for encontrado, retornar erro
    if (!produto) {
      return res.status(404).send("Produto não encontrado.");
    }

    // Atualizando os campos do produto
    produto.nomeProduto = nomeProduto;
    produto.quantidade = quantidade;
    produto.preco = preco;
    produto.categoria = categoria;

    // Salvando as mudanças no banco de dados
    await produto.save();

    console.log("Produto atualizado:", produto);
    
    // Renderizando a página de edição com os dados atualizados
    res.redirect('estoque');

  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao atualizar o produto.");
  }
}
