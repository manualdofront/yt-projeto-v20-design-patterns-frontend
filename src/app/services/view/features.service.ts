import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ProductFeatures } from '../../domain/product-features';
import { mapFeatureMockedResponseToProductFeatures } from '../http/feature-mocked-response-to-product-features';
import { FeaturesMockService } from '../http/features-mock.service';

export type FeatureState = {
  productFeatures: ProductFeatures;
};

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  private readonly featuresMockService = inject(FeaturesMockService);

  private state: BehaviorSubject<FeatureState> = new BehaviorSubject<FeatureState>({
    productFeatures: new ProductFeatures([]),
  });

  readonly featuresState$: Observable<FeatureState> = this.state.pipe(
    map((state: FeatureState) => ({
      productFeatures: state.productFeatures,
    })),
  );

  getFeatures(): void {
    this.featuresMockService
      .getProductFeatures()
      .pipe(
        map((features) => mapFeatureMockedResponseToProductFeatures(features)),
        tap((features) => {
          this.state.next({
            productFeatures: features,
          });
        }),
      )
      .subscribe();
  }
}
