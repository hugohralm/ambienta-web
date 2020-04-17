import {Component, ViewEncapsulation} from '@angular/core';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';
import {Usuario} from '../shared/usuario.model';
import {UsuarioService} from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioListComponent extends BaseResourceListComponent<Usuario> {
  displayedColumns: string[] = ['cpf', 'nome', 'actions'];
  public loading = true;

  constructor(
    private usuarioService: UsuarioService,
  ) {
    super(usuarioService);
  }

  protected afterResourceLoad(): void {
    this.loading = false;
  }
}
