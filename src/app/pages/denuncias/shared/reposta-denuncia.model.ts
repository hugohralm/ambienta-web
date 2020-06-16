import {BaseResourceModel} from '../../../shared/models/base-resource.model';
import {Denuncia} from './denuncia.model';
import {Usuario} from '../../usuarios/shared/usuario.model';
import {BaseEnum} from '../../../shared/models/base.enum';

export class RespostaDenuncia extends BaseResourceModel {

  static status: BaseEnum[] = [
    {valor: 'EM_APURACAO', descricao: 'Em apuração'},
    {valor: 'CONCLUIDA', descricao: 'Concluída'},
    {valor: 'DESQUALIFICADA', descricao: 'Desqualificada'}
  ];

  public id?: number;
  public dataCadastro?: Date;
  public status?: string;
  public descricao?: string;
  public denuncia?: Denuncia;
  public usuario?: Usuario;

  static fromJson(json: any): RespostaDenuncia {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new RespostaDenuncia(), json);
  }
}
