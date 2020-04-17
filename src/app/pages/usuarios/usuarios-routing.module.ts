import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';

const routes: Routes = [
  {path: '', component: UsuarioListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
