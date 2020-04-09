import { Deserializable } from './deserializable.model';
import { BaseModel } from './base.model';
import { Orgao } from './orgao.model';
import { TipoCategoria } from './tipo-categoria.model';

export class Categoria extends BaseModel implements Deserializable {
  public tipo?: TipoCategoria;
  public nome?: string;
  public orgao?: Orgao;
  public ativo?: boolean;

  static fromJson(json: any): Categoria {
    if (json === undefined || json === null) { return null; }
    return Object.assign(new Categoria(), json);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.tipo = new TipoCategoria().deserialize(input.tipo);
    this.orgao = new Orgao().deserialize(input.orgao);
    return this;
  }
}
