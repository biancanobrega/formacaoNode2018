import * as Mongoose from 'mongoose';

export function init() {
  Mongoose.connect('mongodb://localhost:27017/aula2', (error) => {
    if (error) {
      console.error('Erro ao conectar ao Mongo', error);
    } else {
      console.log('Conectado ao Mongo com sucesso');
    }
  });
}