import { Deserializable } from './deserializable.model';

export class UserToken implements Deserializable {
  public token?: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
