const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/produtos", productController.getProducts);
router.post("/produtos", productController.createProduct);

module.exports = router;