import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {RespostaDenuncia} from './reposta-denuncia.model';

@Injectable({providedIn: 'root'})
export class RespostaDenunciaService extends BaseResourceService<RespostaDenuncia> {
  constructor(protected injector: Injector) {
    super(
      '/api/respostas-denuncias',
      injector,
      RespostaDenuncia.fromJson
    );
  }
}
