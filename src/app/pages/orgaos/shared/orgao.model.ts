import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Orgao extends BaseResourceModel {
  public id?: number;
  public nome?: string;
  public ativo?: boolean;

  static fromJson(json: any): Orgao {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Orgao(), json);
  }
}
