import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TipoCategoriaRoutingModule } from './tipo-categoria-routing.module';
import { TipoCategoriaListComponent } from './tipo-categoria-list/tipo-categoria-list.component';
import { TipoCategoriaFormComponent } from './tipo-categoria-form/tipo-categoria-form.component';

@NgModule({
  imports: [
    CommonModule,
    TipoCategoriaRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [TipoCategoriaListComponent, TipoCategoriaFormComponent]
})
export class TipoCategoriaModule { }
