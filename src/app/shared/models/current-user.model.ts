export class CurrentUser {
  constructor(
    public sub?: string,
    public name?: string,
    public exp?: string,
    public auth?: string[]
  ) {}

  static fromJson(json: any): CurrentUser {
    if (json === undefined || json === null) {
      return null;
    }
    let us: CurrentUser;
    us = Object.assign({}, json);
    us.auth = json.auth.split(',');
    return us;
  }
}
