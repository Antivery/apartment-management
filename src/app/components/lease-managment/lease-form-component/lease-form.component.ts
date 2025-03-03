import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 

@Component({
  selector: 'app-lease-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './lease-form.component.html',
  styleUrl: './lease-form.component.css'
})
export class LeaseFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LeaseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      tenant: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      }),
      leaseDetails: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        rentAmount: ['', [Validators.required, Validators.min(1)]]
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('New Lease Created:', this.form.value);
    }
  }
}
