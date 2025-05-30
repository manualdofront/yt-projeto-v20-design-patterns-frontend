import { Component } from '@angular/core';
import { HasDiscountComponent } from '../../presentational/feature-items/has-discount/has-discount.component';
import { IsFavoriteComponent } from '../../presentational/feature-items/is-favorite/is-favorite.component';

@Component({
  selector: 'app-features',
  imports: [IsFavoriteComponent, HasDiscountComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
