import {OrgaoFormComponent} from './orgao-form/orgao-form.component';
import {OrgaoListComponent} from './orgao-list/orgao-list.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: OrgaoListComponent},
  {path: 'new', component: OrgaoFormComponent},
  {path: ':id/edit', component: OrgaoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgaosRoutingModule {
}
