import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-lease-details-component',
  imports: [MatDialogModule],
  templateUrl: './lease-details.component.html',
  styleUrl: './lease-details.component.css'
})
export class LeaseDetailsComponent {
  constructor( public dialogRef: MatDialogRef<LeaseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    closeDialog() {
      this.dialogRef.close();
    }
    
    updateLeaseDetails() {

    }
  
    deleteLease() {
      
    }
}
