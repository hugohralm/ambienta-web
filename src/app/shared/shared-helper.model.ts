import { MatSnackBar } from '@angular/material/snack-bar';

export class SharedHelper{

    public static showSnackBar(message: string, snackBar: MatSnackBar): void {
        snackBar.open(message, null, {
            duration: 3000,
            verticalPosition: 'top'
        });
    }
} 