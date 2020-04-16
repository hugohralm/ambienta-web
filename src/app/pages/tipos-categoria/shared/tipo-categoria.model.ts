import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class TipoCategoria extends BaseResourceModel {
  public id?: number;
  public nome?: string;
  public ativo?: boolean;

  static fromJson(json: any): TipoCategoria {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new TipoCategoria(), json);
  }
}
