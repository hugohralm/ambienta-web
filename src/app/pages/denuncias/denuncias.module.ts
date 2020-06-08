import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DenunciasRoutingModule} from './denuncias-routing.module';
import {NgxLoadingModule} from 'ngx-loading';
import {MatGridListModule} from '@angular/material/grid-list';
import {DenunciaListComponent} from './denuncia-list/denuncia-list.component';
import {DenunciaDetailComponent} from "./denuncia-detail/denuncia-detail.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgImageFullscreenViewModule} from "ng-image-fullscreen-view";

@NgModule({
  imports: [
    SharedModule,
    DenunciasRoutingModule,
    NgxLoadingModule,
    MatGridListModule,
    MatExpansionModule,
    NgImageFullscreenViewModule
  ],
  declarations: [DenunciaListComponent, DenunciaDetailComponent]
})
export class DenunciasModule {
}
