const productRepository = require("../repositories/productRepository");

async function listProducts() {
  return await productRepository.getAllProducts();
}

async function addProduct(data) {
  const { nome, marca, preco, estoque } = data;

  return await productRepository.createProduct(
    nome,
    marca,
    preco,
    estoque
  );
}

module.exports = {
  listProducts,
  addProduct,
};