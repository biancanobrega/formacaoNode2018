// Controlador do usário
// Import do modelo do usuário.
const Usuario = require('../modelos/usuario');

// Função para buscar todos os usuários cadastrados no Mongo.
exports.buscarTodos = (req, res) => {
  Usuario.find()
    // Quando a busca for bem sucedida.
    .then((usuarios) => {
      res.send(usuarios);
    })
    // Quando ocorre algum erro.
    .catch(() => {
      res.sendStatus(500);
    });
};

// Função para buscar usuário por id.
exports.buscarPorId = (req, res) => {
  // Recupera o parâmetro enviado na requisição.
  const id = req.params.id;

  Usuario.find({ _id: id })
    // Quando a busca for bem sucedida.
    .then((usuario) => {
      res.send(usuario);
    })
    // Quando ocorre algum erro.
    .catch(() => {
      res.sendStatus(500);
    });
};

// Função para adicionar um usuário no Mongo.
exports.add = (req, res) => {
  // Recupera o body enviado na requisição.
  const body = req.body;
  // Criação de uma nova instância de Usuário.
  const usuario = new Usuario();
  // Atribui valor ao nome do usuário.
  usuario.nome = body.nome;

  usuario
    // Salva usuário criado.
    .save()
    // Quando a busca for bem sucedida.
    .then((result) => {
      res.send(result);
    })
    // Quando ocorre algum erro.
    .catch(() => {
      res.sendStatus(500);
    });
};

// Funçnao para alterar um usuário no Mongo.ß
exports.alterar = (req, res) => {
  // Recupera parâmetro enviado na requisição.
  const id = req.params.id;
  // Recupera body enviado na requisição.
  const body = req.body;

  Usuario.findByIdAndUpdate({ _id: id }, body)
    // Quando a busca for bem sucedida.
    .then(() => {
      res.send('Atualizou');
    })
    // Quando ocorre algum erro.
    .catch(() => {
      res.sendStatus(500);
    });
};

// Função para removar um usuário do mongo.
exports.remover = (req, res) => {
  // Recupera parâmetro enviado na requisição.
  const id = req.params.id;

  Usuario.findByIdAndRemove({ _id: id })
    // Quando a busca for bem sucedida.
    .then(() => {
      res.send('Exclui');
    })
    // Quando ocorre algum erro.
    .catch(() => {
      res.sendStatus(500);
    });
};
