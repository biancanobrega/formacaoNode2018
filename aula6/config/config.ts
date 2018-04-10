import * as nconf from 'nconf';
import * as path from 'path';
//Read Configurations
const configs = new nconf.Provider({
  store: {
    type: 'file',
    file: path.join(
      __dirname,
      `./env/config.${process.env.NODE_ENV || 'dev'}.json`
    )
  }
});

export interface IConfiguracaoServidor {
  porta: number;
}

export interface IConfiguracaoBancoDados {
  stringConexao: string;
  teste: string;
}

export const getConfiguracaoServidor = (): IConfiguracaoServidor =>
  configs.get('servidor');
export const getConfiguracaoBancoDados = () =>
  configs.get('bancoDados');
