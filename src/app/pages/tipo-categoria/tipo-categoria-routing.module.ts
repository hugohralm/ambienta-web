import { TipoCategoriaFormComponent } from './tipo-categoria-form/tipo-categoria-form.component';
import { TipoCategoriaListComponent } from './tipo-categoria-list/tipo-categoria-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: TipoCategoriaListComponent},
  {path: 'new', component: TipoCategoriaFormComponent},
  {path: ':id/edit', component: TipoCategoriaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoCategoriaRoutingModule { }
