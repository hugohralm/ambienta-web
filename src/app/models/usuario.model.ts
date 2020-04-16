import { Deserializable } from './deserializable.model';
import { BaseModel } from '../shared/models/base.model';

export class Usuario extends BaseModel implements Deserializable {
  public cpf?: string;
  public nome?: string;
  public email?: string;
  public roles?: string[];

  static fromJson(json: any): Usuario {
    if (json === undefined || json === null) { return null; }
    return Object.assign(new Usuario(), json);
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
