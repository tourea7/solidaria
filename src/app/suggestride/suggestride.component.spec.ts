import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestrideComponent } from './suggestride.component';

describe('SuggestrideComponent', () => {
  let component: SuggestrideComponent;
  let fixture: ComponentFixture<SuggestrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
