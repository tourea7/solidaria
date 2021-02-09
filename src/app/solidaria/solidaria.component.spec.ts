import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidariaComponent } from './solidaria.component';

describe('SolidariaComponent', () => {
  let component: SolidariaComponent;
  let fixture: ComponentFixture<SolidariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
