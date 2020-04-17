import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Usuario extends BaseResourceModel {
  public id?: number;
  public cpf?: string;
  public nome?: string;
  public email?: string;
  public papeis?: Papel[];

  static fromJson(json: any): Usuario {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Usuario(), json);
  }
}

export class Papel {
  public nome?: string;
}
