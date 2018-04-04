// Modelo do Usuário.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório.'],
    validate: {
      validator: nome => nome.length < 200,
      message: 'Nome deve ter no máximo 200 caracteres.'
    }
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
