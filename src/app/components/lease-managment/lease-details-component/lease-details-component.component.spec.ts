import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseDetailsComponentComponent } from './lease-details-component.component';

describe('LeaseDetailsComponentComponent', () => {
  let component: LeaseDetailsComponentComponent;
  let fixture: ComponentFixture<LeaseDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaseDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
