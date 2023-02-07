import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesoldComponent } from './datesold.component';

describe('DatesoldComponent', () => {
  let component: DatesoldComponent;
  let fixture: ComponentFixture<DatesoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
