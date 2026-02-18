require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API Sistema Gestão funcionando!🚀');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


const pool = require('./src/config/database');

pool.connect()
    .then(() => console.log('Banco de dados conectado com sucesso!'))
    .catch((err) => console.error('Erro ao conectar no banco de dados:', err));

