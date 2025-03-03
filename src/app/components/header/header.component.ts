import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const navItems = [
  {
    name: 'Apartment Management',
    path: ''
  },
  {
    name: 'Tenant Management',
    path: ''
  },
  {
    name: 'Maintenance Management',
    path: ''
  },
  {
    name: 'Lease Management',
    path: 'lease-management'
  },
  {
    name: 'Payment Management',
    path: ''
  },
]

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  navItems = navItems
}
