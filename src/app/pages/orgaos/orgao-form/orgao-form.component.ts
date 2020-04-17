import {Validators} from '@angular/forms';
import {Component, Injector, ViewEncapsulation} from '@angular/core';
import {OrgaoService} from '../shared/orgao.service';
import {BaseResourceFormComponent} from '../../../shared/components/base-resource-form/base-resource-form.component';
import {Orgao} from '../shared/orgao.model';
import {UsuarioService} from '../../usuarios/shared/usuario.service';
import {Usuario} from '../../usuarios/shared/usuario.model';

@Component({
  selector: 'app-orgao-form',
  templateUrl: './orgao-form.component.html',
  styleUrls: ['./orgao-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrgaoFormComponent extends BaseResourceFormComponent<Orgao> {
  backRouterLink = '/orgaos';
  usuarios: Usuario[] = [];

  constructor(protected orgaoService: OrgaoService, protected injector: Injector, private usuarioService: UsuarioService) {
    super(injector, new Orgao(), orgaoService, Orgao.fromJson);
    this.carregarUsuarios();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.max(255)]],
      gestor: [null],
      ativo: [null, [Validators.required]]
    });
  }

  private carregarUsuarios(): void {
    this.usuarioService.getAll().subscribe(
      usuarios => this.usuarios = usuarios,
      error => this.actionsForError(error)
    );
  }

  protected creationPageTitle(): string {
    return 'CADASTRO DE NOVO ÓRGÃO';
  }

  protected editionPageTitle(): string {
    const orgaoNome = this.resource.nome || '';
    return 'EDITANDO ÓRGÃO: ' + orgaoNome;
  }
}
