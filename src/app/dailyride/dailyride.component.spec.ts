import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyrideComponent } from './dailyride.component';

describe('DailyrideComponent', () => {
  let component: DailyrideComponent;
  let fixture: ComponentFixture<DailyrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
