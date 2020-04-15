import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
export interface ExcludeData {
  id: any;
  label: string;
}

@Component({
  selector: 'app-confirmar-exclusao-dialog',
  templateUrl: './confirmar-exclusao-dialog.component.html',
  styleUrls: ['./confirmar-exclusao-dialog.component.scss']
})
export class ConfirmarExclusaoDialogComponent {
  confirmAction = false;

  constructor(
      public dialogRef: MatDialogRef<ConfirmarExclusaoDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: ExcludeData
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(true);
  }
}
