import { Orgao } from './../models/orgao.model';

import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class OrgaoService extends BaseService<Orgao> {
    constructor(protected injector: Injector) {
        super(
            '/api/orgaos',
            injector,
            Orgao.prototype,
            Orgao.fromJson
        );
    }
}
