import {Deserializable} from '../../../models/deserializable.model';
import {BaseModel} from '../../../shared/models/base.model';
import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Orgao extends BaseResourceModel implements Deserializable {
  public id?: number;
  public nome?: string;
  public ativo?: boolean;

  static fromJson(json: any): Orgao {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Orgao(), json);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
