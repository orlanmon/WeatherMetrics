import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent,MatDialogClose } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogActions, MatDialogContent, MatDialogClose],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {

  public dialogMessage: string | null = null;

  //constructor(private dialog: MatDialog) {};

  constructor( public dialogRef: MatDialogRef<ConfirmDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: { message: string }
      ) {

        
      }
  


}
