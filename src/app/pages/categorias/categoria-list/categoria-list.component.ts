import {Component, ViewEncapsulation} from '@angular/core';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';
import {CategoriaService} from '../shared/categoria.service';
import {Categoria} from '../shared/categoria.model';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriaListComponent extends BaseResourceListComponent<Categoria> {
  displayedColumns: string[] = ['id', 'nome', 'tipo', 'orgao', 'ativo', 'actions'];
  public loading = true;
  constructor(
    private categoriaService: CategoriaService,
  ) {
    super(categoriaService);
  }
  protected afterResourceLoad(): void {
    this.loading = false;
  }
}
