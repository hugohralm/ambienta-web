import { Usuario } from './usuario.model';
import { Deserializable } from './deserializable.model';
import { BaseModel } from '../shared/models/base.model';

export class Denuncia extends BaseModel implements Deserializable {
  public dataCadastro?: Date;
  public status?: string;
  public titulo?: string;
  public categoria?: any;
  public dataOcorrido?: Date;
  public latitude?: number;
  public longitude?: number;
  public denunciado?: string;
  // public denunciante?: Usuario;

  static fromJson(json: any): Denuncia {
    if (json === undefined || json === null) { return null; }
    return Object.assign(new Denuncia(), json);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
