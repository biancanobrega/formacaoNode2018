const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Usuario = require('./usuario');

const app = express();

// Conexão com MONGODB
mongoose.connect('mongodb://localhost:27017/aula2', error => {
  if (error) {
    console.error('Erro ao conectar ao Mongo', error);
  } else {
    console.log('Conectado ao Mongo com sucesso');
  }
});

const hostname = '127.0.0.1';
const port = 9000;

app.use(bodyParser.json());

// Rotas GET
// Lista todas
app.get('/usuarios', (req, res) => {
  // Busca todos os usuário que estão cadastrados no Mongo.
  Usuario.find((error, usuario) => {
    if (error) {
      console.log('IH, Deu erro');
    } else {
      res.send(usuario);
    }
  });
});

// Buscar por id
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  // Busca usuário no Mongo por id.
  Usuario.find({ _id: id }, (error, usuario) => {
    res.send(usuario);
  });
});

// Rota POST
app.post('/usuario', (req, res) => {
  // Recupera o body enviado na requisição.
  const body = req.body;
  // Cria uma nova instância de usuário.
  const usuario = new Usuario();
  usuario.nome = body.nome;
  // Salva usuário no mongo.
  usuario.save((error, usuario) => {
    res.send(usuario);
  });
});

// Rota PUT
app.put('/usuarios/:id', (req, res) => {
  // Recupera o parâmetro enviado na requisição.
  const id = req.params.id;
  // Recupera o body enviado na requisição.
  const body = req.body;
  // Atualiza usuário por id;
  Usuario.findByIdAndUpdate({_id: id}, body, (error, usuario) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send('Atualizou');
    }
  });
});

// Rota DELETE
app.delete('/usuarios/:id', (req, res) => {
  // Recupera o parâmetro enviado na requisição.
  const id = req.params.id;
  // Remove usuário por id.
  Usuario.findByIdAndRemove({_id: id}, (error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send('Excluiu');
    }

  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
