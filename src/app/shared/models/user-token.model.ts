import {BaseResourceModel} from './base-resource.model';

export class UserToken extends BaseResourceModel {
  public token?: string;

  static fromJson(json: any): UserToken {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new UserToken(), json);
  }
}
