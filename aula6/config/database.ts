import * as Mongoose from 'mongoose';
import { getConfiguracaoBancoDados } from './config';

export function init() {

  Mongoose.connect(getConfiguracaoBancoDados().stringConexao, (error) => {
    if (error) {
      console.error('Erro ao conectar ao Mongo', error);
    } else {
      console.log('Conectado ao Mongo com sucesso');
    }
  });
}