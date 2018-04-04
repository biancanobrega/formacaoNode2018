// Import Controlador do usuário.
const UsuarioControlador = require('../controladores/usuario');

module.exports.iniciar = (app) => {
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
};
