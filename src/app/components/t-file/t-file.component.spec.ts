import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFileComponent } from './t-file.component';

describe('TFileComponent', () => {
  let component: TFileComponent;
  let fixture: ComponentFixture<TFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
