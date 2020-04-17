import {Component, ViewEncapsulation} from '@angular/core';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';
import {Denuncia} from '../shared/denuncia.model';
import {DenunciaService} from '../../../services/denuncia.service';
import {ENUM_STATUS_DENUNCIA_VALUES, EnumStatusDenuncia} from '../shared/status-denuncia.num';

@Component({
  selector: 'app-denuncia-list',
  templateUrl: './denuncia-list.component.html',
  styleUrls: ['./denuncia-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DenunciaListComponent extends BaseResourceListComponent<Denuncia> {
  displayedColumns: string[] = ['id', 'titulo', 'categoria', 'cadastro', 'status', 'actions'];
  public loading = true;
  constructor(
    private denunciaService: DenunciaService,
  ) {
    super(denunciaService);
  }
  protected afterResourceLoad(): void {
    this.loading = false;
  }

  getStatusDenunciaTexto(status: string): string {
    return EnumStatusDenuncia[status];
  }
}
