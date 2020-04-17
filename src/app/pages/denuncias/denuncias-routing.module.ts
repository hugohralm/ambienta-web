import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DenunciaListComponent} from './denuncia-list/denuncia-list.component';

const routes: Routes = [
  {path: '', component: DenunciaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciasRoutingModule {
}
