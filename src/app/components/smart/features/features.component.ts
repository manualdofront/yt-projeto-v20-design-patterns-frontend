import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HasDiscountComponent } from '../../presentational/feature-items/has-discount/has-discount.component';
import { IsFavoriteComponent } from '../../presentational/feature-items/is-favorite/is-favorite.component';
import { FeaturesService, FeatureState } from '../../../services/view/features.service';
import { Observable } from 'rxjs';
import { FeatureType } from '../../../models/feature-type';

@Component({
  selector: 'app-features',
  imports: [AsyncPipe, IsFavoriteComponent, HasDiscountComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements OnInit {
  private readonly featuresService = inject(FeaturesService);

  readonly FeatureType: typeof FeatureType = FeatureType;
  readonly featuresState$: Observable<FeatureState> = this.featuresService.featuresState$;

  ngOnInit(): void {
    this.featuresService.getFeatures();
  }
}
