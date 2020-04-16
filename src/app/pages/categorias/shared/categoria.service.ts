import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Categoria} from './categoria.model';

@Injectable({providedIn: 'root'})
export class CategoriaService extends BaseResourceService<Categoria> {
  constructor(protected injector: Injector) {
    super(
      '/api/categorias',
      injector,
      Categoria.fromJson
    );
  }
}
