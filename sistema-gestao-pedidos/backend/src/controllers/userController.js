const userService = require('../services/userService');

async function register(req, res) {
    try {
        const { nome, email, senha } = req.body;

        const user = await userService.registerUser({ nome, email, senha });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, senha } = req.body;

        const result = await userService.loginUser({ email, senha });

        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    register,
    login
};
