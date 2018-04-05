import { Schema, Document, model } from 'mongoose';

export interface IUsuarioModel extends Document {
  nome: string;
  dataCriacao?: Date;
}

export const UsuarioSchema = new Schema({
  nome: { type: String, required: [true, 'Nome é obrigatório.'] },
  dataCriacao: { type: Date, default: Date.now }
});

export const UsuarioModel = model<IUsuarioModel>('Usuario', UsuarioSchema);