import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Orgao} from './orgao.model';

@Injectable({providedIn: 'root'})
export class OrgaoService extends BaseResourceService<Orgao> {
  constructor(protected injector: Injector) {
    super(
      '/api/orgaos',
      injector,
      Orgao.fromJson
    );
  }
}
