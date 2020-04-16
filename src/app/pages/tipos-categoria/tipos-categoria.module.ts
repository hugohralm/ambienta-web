import {NgModule} from '@angular/core';
import {TiposCategoriaRoutingModule} from './tipos-categoria-routing.module';
import {TipoCategoriaListComponent} from './tipo-categoria-list/tipo-categoria-list.component';
import {TipoCategoriaFormComponent} from './tipo-categoria-form/tipo-categoria-form.component';
import {SharedModule} from '../../shared/shared.module';
import {NgxLoadingModule} from 'ngx-loading';

@NgModule({
    imports: [
        SharedModule,
        TiposCategoriaRoutingModule,
        NgxLoadingModule
    ],
  declarations: [TipoCategoriaListComponent, TipoCategoriaFormComponent]
})
export class TiposCategoriaModule {
}
