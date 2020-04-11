import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TipoCategoriaRoutingModule } from './tipo-categoria-routing.module';
import { TipoCategoriaListComponent } from './tipo-categoria-list/tipo-categoria-list.component';
import { TipoCategoriaFormComponent } from './tipo-categoria-form/tipo-categoria-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    TipoCategoriaRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [TipoCategoriaListComponent, TipoCategoriaFormComponent]
})
export class TipoCategoriaModule { }
