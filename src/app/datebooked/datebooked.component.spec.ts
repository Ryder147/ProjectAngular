import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatebookedComponent } from './datebooked.component';

describe('DatebookedComponent', () => {
  let component: DatebookedComponent;
  let fixture: ComponentFixture<DatebookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatebookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatebookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
