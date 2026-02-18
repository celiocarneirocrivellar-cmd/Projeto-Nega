const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser({ nome, email, senha }) {
    const userExists = await userRepository.findByEmail(email);

    if (userExists) {
        throw new Error('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = await userRepository.createUser({
        nome,
        email,
        senha: hashedPassword
    });

    return newUser;
}

async function loginUser({ email, senha }) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
        throw new Error('Senha inválida');
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return { token };
}

module.exports = {
    registerUser,
    loginUser
};
