import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceFileComponent } from './attendance-file.component';

describe('AttendanceFileComponent', () => {
  let component: AttendanceFileComponent;
  let fixture: ComponentFixture<AttendanceFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
