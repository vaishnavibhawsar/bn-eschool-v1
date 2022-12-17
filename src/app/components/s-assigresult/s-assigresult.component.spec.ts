import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAssigresultComponent } from './s-assigresult.component';

describe('SAssigresultComponent', () => {
  let component: SAssigresultComponent;
  let fixture: ComponentFixture<SAssigresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAssigresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAssigresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
