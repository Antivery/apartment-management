import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LeaseFormComponent } from '../lease-form-component/lease-form.component';

@Component({
  selector: 'app-lease-details-component',
  imports: [MatDialogModule],
  templateUrl: './lease-details.component.html',
  styleUrl: './lease-details.component.css'
})
export class LeaseDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<LeaseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

    closeDialog() {
      this.dialogRef.close();
    }
    
    updateLeaseDetails() {
      this.dialog.open(LeaseFormComponent, {
        height: '90%',
        data: this.data
      });

    this.dialogRef.afterClosed().subscribe(updatedLease => {
        if (updatedLease) {
          console.log('Lease Updated:', updatedLease);
          this.dialogRef.close(updatedLease); // Close details modal and pass back updated data
        }
      });
    }

    deleteLease() {

    }
}
