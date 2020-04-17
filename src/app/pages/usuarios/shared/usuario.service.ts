import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Usuario} from './usuario.model';

@Injectable({providedIn: 'root'})
export class UsuarioService extends BaseResourceService<Usuario> {
  constructor(protected injector: Injector) {
    super(
      '/api/usuarios',
      injector,
      Usuario.fromJson
    );
  }
}
