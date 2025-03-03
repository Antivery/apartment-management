import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LeaseDetailsComponent } from '../lease-details-component/lease-details.component';
import { LeaseFormComponent } from '../lease-form-component/lease-form.component';

@Component({
  selector: 'app-lease-management-component',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './lease-management.component.html',
  styleUrls: ['./lease-management.component.css']
})
export class LeaseManagementComponent {
  leases = [
    {
      id: 1,
      propertyName: 'Maple Apartments',
      tenantName: 'John Doe',
      startDate: '2024-01-01',
      endDate: '2025-01-01'
    },
    {
      id: 2,
      propertyName: 'Oakwood Condos',
      tenantName: 'Jane Smith',
      startDate: '2023-06-15',
      endDate: '2024-06-15'
    },
    {
      id: 3,
      propertyName: 'Pine Residences',
      tenantName: 'Alice Johnson',
      startDate: '2024-02-10',
      endDate: '2025-02-10'
    }
  ];

  constructor(private dialog: MatDialog) {}

  openLeaseDetails(lease: any) {
    this.dialog.open(LeaseDetailsComponent, {
      width: '35rem',
      height: '90%',
      data: lease
    });
  }

  onLeaseSelect() {
    console.log('Selected Lease:', this.leases);
  }

  addNewLease() {
    this.dialog.open(LeaseFormComponent, {
      width: '35rem',
      height: '90%',
    })
  }
}