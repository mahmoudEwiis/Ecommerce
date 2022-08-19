import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCompleteComponent } from './checkout-complete.component';

describe('CheckoutCompleteComponent', () => {
  let component: CheckoutCompleteComponent;
  let fixture: ComponentFixture<CheckoutCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
