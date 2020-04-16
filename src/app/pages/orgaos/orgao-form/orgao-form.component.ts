import {Validators} from '@angular/forms';
import {Component, Injector} from '@angular/core';
import {OrgaoService} from '../shared/orgao.service';
import {BaseResourceFormComponent} from '../../../shared/components/base-resource-form/base-resource-form.component';
import {Orgao} from '../shared/orgao.model';

@Component({
  selector: 'app-orgao-form',
  templateUrl: './orgao-form.component.html',
  styleUrls: ['./orgao-form.component.scss']
})
export class OrgaoFormComponent extends BaseResourceFormComponent<Orgao> {
  backRouterLink = '/orgaos';

  constructor(protected orgaoService: OrgaoService, protected injector: Injector) {
    super(injector, new Orgao(), orgaoService, Orgao.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.max(255)]],
      ativo: [null, [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'CADASTRO DE NOVO ÓRGÃO';
  }

  protected editionPageTitle(): string {
    const orgaoNome = this.resource.nome || '';
    return 'EDITANDO ÓRGÃO: ' + orgaoNome;
  }
}
