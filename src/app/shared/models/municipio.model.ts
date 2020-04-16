import {BaseResourceModel} from './base-resource.model';

export class Municipio extends BaseResourceModel {
  public id?: number;
  public nome?: string;
  public uf?: string;
  public codigoIbge?: number;

  static fromJson(json: any): Municipio {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Municipio(), json);
  }
}
