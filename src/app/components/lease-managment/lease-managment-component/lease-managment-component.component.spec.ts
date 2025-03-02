import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseManagmentComponentComponent } from './lease-managment-component.component';

describe('LeaseManagmentComponentComponent', () => {
  let component: LeaseManagmentComponentComponent;
  let fixture: ComponentFixture<LeaseManagmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaseManagmentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseManagmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
