import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToPayeeComponent } from './send-to-payee.component';

describe('SendToPayeeComponent', () => {
  let component: SendToPayeeComponent;
  let fixture: ComponentFixture<SendToPayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToPayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
