import { Deserializable } from './deserializable.model';
import { BaseModel } from './base.model';

export class TipoCategoria extends BaseModel implements Deserializable {
  public nome?: string;
  public ativo?: boolean;

  static fromJson(json: any): TipoCategoria {
    if (json === undefined || json === null) { return null; }
    return Object.assign(new TipoCategoria(), json);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
