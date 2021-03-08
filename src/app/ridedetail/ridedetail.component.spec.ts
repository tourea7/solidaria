import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidedetailComponent } from './ridedetail.component';

describe('RidedetailComponent', () => {
  let component: RidedetailComponent;
  let fixture: ComponentFixture<RidedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
