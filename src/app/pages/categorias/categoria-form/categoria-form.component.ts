import {Validators} from '@angular/forms';
import {Categoria} from '../shared/categoria.model';
import {Component, Injector} from '@angular/core';
import {CategoriaService} from '../shared/categoria.service';
import {BaseResourceFormComponent} from '../../../shared/components/base-resource-form/base-resource-form.component';
import {TipoCategoriaService} from '../../tipos-categoria/shared/tipo-categoria.service';
import {OrgaoService} from '../../orgaos/shared/orgao.service';
import {TipoCategoria} from '../../tipos-categoria/shared/tipo-categoria.model';
import {Orgao} from '../../orgaos/shared/orgao.model';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent extends BaseResourceFormComponent<Categoria> {
  backRouterLink = '/categorias';
  tiposCategoria: TipoCategoria[] = [];
  orgaos: Orgao[] = [];

  constructor(
    protected injector: Injector,
    protected categoriaService: CategoriaService,
    private tipoCategoriaService: TipoCategoriaService,
    private orgaoService: OrgaoService
  ) {
    super(injector, new Categoria(), categoriaService, Categoria.fromJson);
    this.carregarTipoCategoria();
    this.carregarOrgao();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.max(255)]],
      tipo: [null, Validators.required],
      orgao: [null, Validators.required],
      ativo: [null, [Validators.required]]
    });
  }

  private carregarTipoCategoria(): void {
    this.tipoCategoriaService.getAll().subscribe(
      tiposCategoria => this.tiposCategoria = tiposCategoria,
      error => this.actionsForError(error)
    );
  }

  private carregarOrgao(): void {
    this.orgaoService.getAll().subscribe(
      orgaos => this.orgaos = orgaos,
      error => this.actionsForError(error)
    );
  }

  protected creationPageTitle(): string {
    return 'CADASTRO DE NOVA CATEGORIA';
  }

  protected editionPageTitle(): string {
    const categoriaNome = this.resource.nome || '';
    return 'EDITANDO CATEGORIA: ' + categoriaNome;
  }
}
