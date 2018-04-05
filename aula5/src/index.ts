import * as Express from 'express';
import UsuarioRota from './rotas/usuario';

export function init(server: Express.Application) {
  // INICIAR ROTAS
  UsuarioRota(server);
}
