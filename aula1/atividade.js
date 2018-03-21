// Importa os módulos/arquivos que serão utilizados.
const express = require('express');
const usuarios = require('./usuarios');

// Criação das constantes.
const app = express();
const hostname = '127.0.0.1';
const port = 3000;


// Busca todos os usuários.
app.get('/v1/usuarios', (req, res) => {
  // Retorna lista com todos os usuários.
  res.send(usuarios);
});

// Busca usuário por id.
app.get('/v1/usuario/:id', (req, res) => {
  // Recupera o id passado por parâmetro na requisição.
  const id = Number(req.params.id);

  // Busca na lista de usuários o usuário com id igual ao passado na requisição 
  // Retorna no máximo 1 resultado, se por acaso tenha mais de usuário que atenda a condição, sempre será retornado o primeiro. 
  const result = usuarios.find(user => user.id === id);

  if (result) {
    // Retorna usuário encontrado.
    res.send(result);
  } else {
    // Retorna código 204.
    res.sendStatus(204);
  }
  
});

// Busca usuário por sexo.
app.get('/v1/usuarios/sexo/:sexo', (req, res) => {
  // Recupera op sexo passado por parâmetro na requisição.
  const sexo = req.params.sexo;

  // Busca todos os usuários que o sexo seja igual ao passado na requisição.
  const result = usuarios.filter(user => user.sexo === sexo);
  if (result.length > 0) {
    // Retorna lista de usuários encontrados.
    res.send(result);
  } else {
    // Retorna código 204.
    res.sendStatus(204);
  }
});

// Inicia o servidor e fica escutando no host e porta que foi passado por parâmetro.
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

