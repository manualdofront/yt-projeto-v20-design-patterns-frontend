import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsFavoriteComponent } from './is-favorite.component';

describe('IsFavoriteComponent', () => {
  let component: IsFavoriteComponent;
  let fixture: ComponentFixture<IsFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsFavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
