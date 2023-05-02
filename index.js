const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'contato.html'));
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
  