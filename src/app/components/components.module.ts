import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ConfirmarExclusaoDialogComponent} from "./confirmar-exclusao-dialog/confirmar-exclusao-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatDialogModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ConfirmarExclusaoDialogComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
