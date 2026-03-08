const pool = require("../config/database");

async function getAllProducts() {
    const result = await pool.query("SELECT * FROM produtos");
    return result.rows;
}
async function createProduct(nome, marca, preco, estoque) {
    const result = await pool.query(
        "INSERT INTO produtos (nome, marca, preco, estoque) VALUES ($1, $2, $3, $4) RETURNING *",
        [nome, marca, preco, estoque]
    );

    return result.rows[0];
};

module.exports = {
    getAllProducts,
    createProduct,
};