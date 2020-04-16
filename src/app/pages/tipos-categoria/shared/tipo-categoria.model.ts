import {Deserializable} from '../../../models/deserializable.model';
import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class TipoCategoria extends BaseResourceModel implements Deserializable {
  public id?: number;
  public nome?: string;
  public ativo?: boolean;

  static fromJson(json: any): TipoCategoria {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new TipoCategoria(), json);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
