import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CategoriasRoutingModule} from './categorias-routing.module';
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {NgxLoadingModule} from 'ngx-loading';

@NgModule({
    imports: [
        SharedModule,
        CategoriasRoutingModule,
        NgxLoadingModule
    ],
  declarations: [CategoriaListComponent, CategoriaFormComponent]
})
export class CategoriasModule {
}
