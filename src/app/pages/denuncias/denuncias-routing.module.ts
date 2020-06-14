import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DenunciaListComponent} from './denuncia-list/denuncia-list.component';
import {DenunciaDetailComponent} from "./denuncia-detail/denuncia-detail.component";

const routes: Routes = [
  {path: '', component: DenunciaListComponent},
  {path: ':id/edit', component: DenunciaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciasRoutingModule {
}
