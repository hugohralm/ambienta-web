import { Deserializable } from './deserializable.model';

export class Usuario implements Deserializable {
  public id?: number;
  public cpf?: string;
  public nome?: string;
  public email?: string;
  public roles?: string[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
