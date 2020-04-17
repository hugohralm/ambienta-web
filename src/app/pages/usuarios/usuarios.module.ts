import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UsuariosRoutingModule} from './usuarios-routing.module';
import {NgxLoadingModule} from 'ngx-loading';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';

@NgModule({
  imports: [
    SharedModule,
    UsuariosRoutingModule,
    NgxLoadingModule
  ],
  declarations: [UsuarioListComponent]
})
export class UsuariosModule {
}
