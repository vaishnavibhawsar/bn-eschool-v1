import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SStudentdetailsComponent } from './s-studentdetails.component';

describe('SStudentdetailsComponent', () => {
  let component: SStudentdetailsComponent;
  let fixture: ComponentFixture<SStudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SStudentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SStudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
