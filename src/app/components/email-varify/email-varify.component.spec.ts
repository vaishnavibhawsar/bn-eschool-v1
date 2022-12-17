import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVarifyComponent } from './email-varify.component';

describe('EmailVarifyComponent', () => {
  let component: EmailVarifyComponent;
  let fixture: ComponentFixture<EmailVarifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVarifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVarifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
