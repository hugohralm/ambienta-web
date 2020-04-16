import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {OrgaosRoutingModule} from './orgaos-routing.module';
import {OrgaoFormComponent} from './orgao-form/orgao-form.component';
import {OrgaoListComponent} from './orgao-list/orgao-list.component';
import {NgxLoadingModule} from 'ngx-loading';

@NgModule({
    imports: [
        SharedModule,
        OrgaosRoutingModule,
        NgxLoadingModule
    ],
  declarations: [OrgaoListComponent, OrgaoFormComponent]
})
export class OrgaosModule {
}
