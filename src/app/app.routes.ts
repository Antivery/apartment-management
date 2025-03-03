import { Routes } from '@angular/router';
import { LeaseManagementComponent } from './components/lease-managment/lease-managment-component/lease-management.component';
import { LeaseDetailsComponent } from './components/lease-managment/lease-details-component/lease-details.component';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';

export const routes: Routes = [
    { path: 'lease-management', component: LeaseManagementComponent },
    { path: 'lease-details', component: LeaseDetailsComponent },
    { path: 'dashboard', component: DashboardComponent}
];
