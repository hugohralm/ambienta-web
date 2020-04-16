import {NgModule} from '@angular/core';
import {TipoCategoriaRoutingModule} from './tipo-categoria-routing.module';
import {TipoCategoriaListComponent} from './tipo-categoria-list/tipo-categoria-list.component';
import {TipoCategoriaFormComponent} from './tipo-categoria-form/tipo-categoria-form.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TipoCategoriaRoutingModule
  ],
  declarations: [TipoCategoriaListComponent, TipoCategoriaFormComponent]
})
export class TipoCategoriaModule {
}
