import {Component} from '@angular/core';
import {TipoCategoriaService} from 'src/app/pages/tipos-categoria/shared/tipo-categoria.service';
import {TipoCategoria} from 'src/app/pages/tipos-categoria/shared/tipo-categoria.model';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-tipo-categoria-list',
  templateUrl: './tipo-categoria-list.component.html',
  styleUrls: ['./tipo-categoria-list.component.scss']
})
export class TipoCategoriaListComponent extends BaseResourceListComponent<TipoCategoria> {
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'actions'];

  constructor(
    private tipoCategoriaService: TipoCategoriaService,
  ) {
    super(tipoCategoriaService);
  }
}