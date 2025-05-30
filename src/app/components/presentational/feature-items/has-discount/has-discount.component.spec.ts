import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasDiscountComponent } from './has-discount.component';

describe('HasDiscountComponent', () => {
  let component: HasDiscountComponent;
  let fixture: ComponentFixture<HasDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HasDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
