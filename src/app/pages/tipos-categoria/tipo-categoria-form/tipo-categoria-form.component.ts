import {Component, Injector} from '@angular/core';
import {TipoCategoria} from 'src/app/pages/tipos-categoria/shared/tipo-categoria.model';
import {Validators} from '@angular/forms';
import {BaseResourceFormComponent} from '../../../shared/components/base-resource-form/base-resource-form.component';
import {TipoCategoriaService} from '../shared/tipo-categoria.service';

@Component({
  selector: 'app-tipo-categoria-form',
  templateUrl: './tipo-categoria-form.component.html',
  styleUrls: ['./tipo-categoria-form.component.scss']
})
export class TipoCategoriaFormComponent extends BaseResourceFormComponent<TipoCategoria> {
  backRouterLink = '/tipos-categoria';
  constructor(protected tipoCategoriaService: TipoCategoriaService, protected injector: Injector) {
    super(injector, new TipoCategoria(), tipoCategoriaService, TipoCategoria.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.max(255)]],
      ativo: [null, [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'CADASTRO DE NOVO TIPO CATEGORIA';
  }

  protected editionPageTitle(): string {
    const tipoCategoriaNome = this.resource.nome || '';
    return 'EDITANDO TIPO CATEGORIA: ' + tipoCategoriaNome;
  }
}
