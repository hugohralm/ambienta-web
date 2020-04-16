import { Denuncia } from './../models/denuncia.model';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import {BaseResourceService} from '../shared/services/base-resource.service';

@Injectable({ providedIn: 'root' })
export class DenunciaService extends BaseResourceService<Denuncia> {
    constructor(protected injector: Injector) {
        super(
            '/api/denuncias',
            injector,
            Denuncia.fromJson
        );
    }
}
