import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmarExclusaoDialogComponent} from './components/confirmar-exclusao-dialog/confirmar-exclusao-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    NgxMaskModule.forRoot({
      validation: true
    })
  ],
  declarations: [
    ConfirmarExclusaoDialogComponent
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    NgxMaskModule,

    // shared components
    ConfirmarExclusaoDialogComponent
  ]
})
export class SharedModule {
}
