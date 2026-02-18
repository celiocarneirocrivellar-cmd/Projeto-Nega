const pool = require('../config/database');

async function createUser(nome, email, senha) {
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email, criado_em';

    const values = [nome, email, senha];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

async function findByEmail(email) {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows[0];
};

module.exports = {
    createUser,
    findByEmail,
};
