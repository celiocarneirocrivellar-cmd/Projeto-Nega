// model do produto 
class Product {
  constructor(id, nome, descricao, preco, estoque, categoria, imagem) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.estoque = estoque;
    this.categoria = categoria;
    this.imagem = imagem;
  }
}
module.exports = Product;

