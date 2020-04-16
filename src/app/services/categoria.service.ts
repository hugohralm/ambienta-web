import { Categoria } from '../models/categoria.model';

import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../shared/services/base.service';

@Injectable({ providedIn: 'root' })
export class CategoriaService extends BaseService<Categoria> {
    constructor(protected injector: Injector) {
        super(
            '/api/categorias',
            injector,
            Categoria.prototype,
            Categoria.fromJson
        );
    }
}
