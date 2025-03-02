import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseFormComponentComponent } from './lease-form-component.component';

describe('LeaseFormComponentComponent', () => {
  let component: LeaseFormComponentComponent;
  let fixture: ComponentFixture<LeaseFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaseFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
