
import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { TipoCategoria } from '../models/tipo-categoria.model';

@Injectable({ providedIn: 'root' })
export class TipoCategoriaService extends BaseService<TipoCategoria> {
    constructor(protected injector: Injector) {
        super(
            '/api/tipos-categoria',
            injector,
            TipoCategoria.prototype,
            TipoCategoria.fromJson
        );
    }
}
