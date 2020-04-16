import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {OrgaosRoutingModule} from './orgaos-routing.module';
import {OrgaoFormComponent} from './orgao-form/orgao-form.component';
import {OrgaoListComponent} from './orgao-list/orgao-list.component';

@NgModule({
  imports: [
    SharedModule,
    OrgaosRoutingModule
  ],
  declarations: [OrgaoListComponent, OrgaoFormComponent]
})
export class OrgaosModule {
}
