const bancoDados = require('./config/database');
const servidor = require('./config/servidor');
const usuarioRota = require('./src/rotas/usuario');

servidor.app.listen(servidor.port, servidor.hostname, () => {
  console.log(`Server running at http://${servidor.hostname}:${servidor.port}/`);
  bancoDados.iniciar();
  usuarioRota.iniciar(servidor.app);
});
