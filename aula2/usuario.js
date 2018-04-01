const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Criação de Schema
const UsuarioSchema = new Schema({
  nome: {
    // tipo do dado.
    type: String,
    // Definição se o dado é obrigatório.
    required: [true, 'Nome é obrigatório.'],
    // Definição de validações.
    validate: {
      validator: nome => nome.length < 200,
      message: 'Nome deve ter no máximo 200 caracteres.'
    }
  },
  dataCadastro: {
    type: Date,
    // Definição do valor padrão caso não venha nenhum valor.
    default: Date.now
  }
});

// Criação do model passando o schema utilizado.
// Só a partir do model que ficará disponíveis as funções find, save e etc.
const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
