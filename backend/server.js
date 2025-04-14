const express = require('express');
const cors = require('cors');

// Criar a aplicação Express
const app = express();
const PORT = 3000;

//middlewares para analisar o corpo da requisição
//cors para definir de onde a requisição irá vir
app.use(cors(
    { origin: 'http://localhost:5173' } // Permitir requisições do frontend
));
//usei o express.json para analisar o corpo da requisição e verificar se o número foi enviado corretamente
app.use(express.json());

//esse endpoint irá fazer o calculo do numero recebido pelo frontend e retornar o resultado multiplicado por 10 
app.post('/calculate', (req, res) => {
    const { number } = req.body;

    if (number === undefined) {
        return res.status(400).json({ error: 'Número não fornecido' });
    }

    const numValue = Number(number);
    if (isNaN(numValue)) {
        return res.status(400).json({ error: 'Número inválido' });
    }

    const result = numValue * 10;

    res.json({ result });
});

// Iniciar o servidor apenas se não estiver em modo de teste
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}

// Exportar app para testes
module.exports = app;