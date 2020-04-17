import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DenunciasRoutingModule} from './denuncias-routing.module';
import {NgxLoadingModule} from 'ngx-loading';
import {DenunciaListComponent} from './denuncia-list/denuncia-list.component';

@NgModule({
  imports: [
    SharedModule,
    DenunciasRoutingModule,
    NgxLoadingModule
  ],
  declarations: [DenunciaListComponent]
})
export class DenunciasModule {
}
