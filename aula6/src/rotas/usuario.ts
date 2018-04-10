import * as Express from "express";
import UsuarioControlador from '../controladores/usuario';

export default function (server: Express.Application) {
  const usuarioControlador = new UsuarioControlador();
  server.get('/usuarios', usuarioControlador.buscarTodos);
}