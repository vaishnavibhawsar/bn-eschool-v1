import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STimetableComponent } from './s-timetable.component';

describe('STimetableComponent', () => {
  let component: STimetableComponent;
  let fixture: ComponentFixture<STimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
