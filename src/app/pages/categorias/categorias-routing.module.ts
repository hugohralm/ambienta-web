import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: CategoriaListComponent},
  {path: 'new', component: CategoriaFormComponent},
  {path: ':id/edit', component: CategoriaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule {
}
