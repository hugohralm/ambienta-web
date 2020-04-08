import { Usuario } from './usuario.model';
import { Deserializable } from './deserializable.model';

export class Denuncia implements Deserializable {
  public id?: number;
  public dataCadastro?: Date;
  public status?: string;
  public titulo?: string;
  public categoria?: any;
  public dataOcorrido?: Date;
  public latitude?: number;
  public longitude?: number;
  public denunciado?: string;
  public denunciante?: Usuario;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.denunciante = new Usuario().deserialize(input.denunciante);
    return this;
  }
}
