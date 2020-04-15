import { Deserializable } from './deserializable.model';
import { BaseModel } from '../shared/models/base.model';

export class Orgao extends BaseModel implements Deserializable {
  public nome?: string;
  public ativo?: boolean;

  static fromJson(json: any): Orgao {
    if (json === undefined || json === null) { return null; }
    return Object.assign(new Orgao(), json);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
