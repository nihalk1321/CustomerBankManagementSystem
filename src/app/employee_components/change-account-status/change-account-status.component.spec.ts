import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAccountStatusComponent } from './change-account-status.component';

describe('ChangeAccountStatusComponent', () => {
  let component: ChangeAccountStatusComponent;
  let fixture: ComponentFixture<ChangeAccountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAccountStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAccountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
