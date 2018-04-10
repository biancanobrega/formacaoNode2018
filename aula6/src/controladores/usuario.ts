import * as Express from 'express';
import { UsuarioModel, IUsuarioModel } from '../modelos/usuario';

export default class Usuario {
  constructor() {}

  public async buscarTodos(req: Express.Request, res: Express.Response) {
    try {
      const usuarios = await UsuarioModel.find();
      res.send(usuarios);

    } catch (error) {
      console.log(`Error: ${error}`);
      res.sendStatus(500);
    }
    /*UsuarioModel.find()
      .then(usuarios => {
        res.send(usuarios);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });*/
  }
}
