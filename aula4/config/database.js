// Conexão com MONGODB
const mongoose = require('mongoose');

module.exports.iniciar = () => {
  mongoose.connect('mongodb://localhost:27017/aula2', (error) => {
    if (error) {
      console.error('Erro ao conectar ao Mongo', error);
    } else {
      console.log('Conectado ao Mongo com sucesso');
    }
  });
};
