import {Categoria} from '../../categorias/shared/categoria.model';
import {BaseResourceModel} from '../../../shared/models/base-resource.model';
import {Municipio} from '../../../shared/models/municipio.model';
import {Evidencia} from './evidencia.model';
import {RespostaDenuncia} from './reposta-denuncia.model';

export class Denuncia extends BaseResourceModel {

  public id?: number;
  public dataCadastro?: Date;
  public codigoAcompanhamento?: string;
  public status?: string;
  public titulo?: string;
  public descricao?: string;
  public categoria?: Categoria;
  public dataOcorrido?: Date;
  public latitude?: number;
  public longitude?: number;
  public municipio?: Municipio;
  public cpfDenunciante?: string;
  public nomeDenunciante?: string;
  public email?: string;
  public nomeDenunciado?: string;
  public evidencias?: Evidencia[];
  public respostas?: RespostaDenuncia[];

  static fromJson(json: any): Denuncia {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Denuncia(), json);
  }
}
