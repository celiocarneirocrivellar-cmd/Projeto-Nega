const productService = require("../services/productService");

async function getProducts(req, res) {
  const products = await productService.listProducts();
  res.json(products);
}

async function createProduct(req, res) {
  const product = await productService.addProduct(req.body);
  res.status(201).json(product);
}

module.exports = {
  getProducts,
  createProduct,
};