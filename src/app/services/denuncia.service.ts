import { Denuncia } from './../models/denuncia.model';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class DenunciaService extends BaseService<Denuncia> {
    constructor(protected injector: Injector) {
        super(
            '/api/denuncias',
            injector,
            Denuncia.prototype,
            Denuncia.fromJson
        );
    }
}
