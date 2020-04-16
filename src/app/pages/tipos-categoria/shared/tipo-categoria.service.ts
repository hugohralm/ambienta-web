import {Injectable, Injector} from '@angular/core';
import {BaseService} from '../../../shared/services/base.service';
import {TipoCategoria} from './tipo-categoria.model';
import {BaseResourceService} from '../../../shared/services/base-resource.service';

@Injectable({providedIn: 'root'})
export class TipoCategoriaService extends BaseResourceService<TipoCategoria> {
  constructor(protected injector: Injector) {
    super(
      '/api/tipos-categoria',
      injector,
      TipoCategoria.fromJson
    );
  }
}
