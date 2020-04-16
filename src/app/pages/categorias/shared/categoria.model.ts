import {Orgao} from '../../orgaos/shared/orgao.model';
import {TipoCategoria} from '../../tipos-categoria/shared/tipo-categoria.model';
import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Categoria extends BaseResourceModel {
  public id?: number;
  public tipo?: TipoCategoria;
  public nome?: string;
  public orgao?: Orgao;
  public ativo?: boolean;

  static fromJson(json: any): Categoria {
    if (json === undefined || json === null) { return null; }
    return Object.assign(new Categoria(), json);
  }
}
