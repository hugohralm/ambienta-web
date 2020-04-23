import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Evidencia extends BaseResourceModel {
  public id?: number;
  public dataCadastro?: Date;
  public idPublico?: string;
  public assinatura?: string;
  public formato?: string;
  public tipoArquivo?: string;
  public url?: string;

  static fromJson(json: any): Evidencia {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Evidencia(), json);
  }
}
