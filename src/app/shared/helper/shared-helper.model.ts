import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConfirmarExclusaoDialogComponent} from '../components/confirmar-exclusao-dialog/confirmar-exclusao-dialog.component';
import {Observable} from 'rxjs';

export class SharedHelper {
  public static showSnackBar(message: string, snackBar: MatSnackBar): void {
    snackBar.open(message, null, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

  public static showDeleteDialog(dialog: MatDialog, label: string): Observable<any> {
    const dialogRef = dialog.open(ConfirmarExclusaoDialogComponent, {
      width: '400px',
      data: {label: label}
    });

    return dialogRef.afterClosed();
  }
}
