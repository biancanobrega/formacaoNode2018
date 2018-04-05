import * as Express from 'express';
import { UsuarioModel, IUsuarioModel } from '../modelos/usuario';

export default class Usuario {
  constructor() {}

  public buscarTodos(req: Express.Request, res: Express.Response) {
    UsuarioModel.find()
      .then(usuarios => {
        res.send(usuarios);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
}
