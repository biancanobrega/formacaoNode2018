const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import Controlador do usuário.
const UsuarioControlador = require('../controladores/usuario');

const app = express();
// Conexão com MONGODB

mongoose.connect('mongodb://localhost:27017/aula2', (error) => {
  if (error) {
    console.error('Erro ao conectar ao Mongo', error);
  } else {
    console.log('Conectado ao Mongo com sucesso');
  }
});

const hostname = '127.0.0.1';
const port = 9000;

// Utilização do Body-parser para utilizar json nos serviços.
app.use(bodyParser.json());

// Rotas GET
// Lista todas
app.get('/usuarios', UsuarioControlador.buscarTodos);
// Buscar por id
app.get('/usuarios/:id', UsuarioControlador.buscarPorId);
// Rota POST
app.post('/usuario', UsuarioControlador.add);
// Rota PUT
app.put('/usuarios/:id', UsuarioControlador.alterar); 
// Rota DELETE
app.delete('/usuarios/:id', UsuarioControlador.remover);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
