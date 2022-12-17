import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARFileComponent } from './a-r-file.component';

describe('ARFileComponent', () => {
  let component: ARFileComponent;
  let fixture: ComponentFixture<ARFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
