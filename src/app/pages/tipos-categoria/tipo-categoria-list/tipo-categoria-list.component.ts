import {Component, ViewEncapsulation} from '@angular/core';
import {TipoCategoriaService} from 'src/app/pages/tipos-categoria/shared/tipo-categoria.service';
import {TipoCategoria} from 'src/app/pages/tipos-categoria/shared/tipo-categoria.model';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-tipo-categoria-list',
  templateUrl: './tipo-categoria-list.component.html',
  styleUrls: ['./tipo-categoria-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TipoCategoriaListComponent extends BaseResourceListComponent<TipoCategoria> {
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'actions'];
  public loading = true;

  constructor(
    private tipoCategoriaService: TipoCategoriaService,
  ) {
    super(tipoCategoriaService);
  }

  protected afterResourceLoad(): void {
    this.loading = false;
  }

  protected afterResourceLoadError(): void {
    this.loading = false;
  }
}
