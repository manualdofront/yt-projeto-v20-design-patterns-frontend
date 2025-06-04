import { inject, Injectable } from '@angular/core';
import { FeaturesMockService } from '../http/features-mock.service';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { mapFeatureMockedResponseToState } from '../http/feature-mocked-response-to-state';

export type FeatureState = {
  isFavorite: boolean;
  hasDiscount: boolean;
  hasDataEnoughToDisplaySection?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  private readonly featuresMockService = inject(FeaturesMockService);

  private state: BehaviorSubject<FeatureState> = new BehaviorSubject<FeatureState>({
    isFavorite: false,
    hasDiscount: false,
    hasDataEnoughToDisplaySection: false,
  });

  readonly featuresState$: Observable<FeatureState> = this.state.pipe(
    map((state: FeatureState) => ({
      isFavorite: state.isFavorite,
      hasDiscount: state.hasDiscount,
      hasDataEnoughToDisplaySection: state.isFavorite || state.hasDiscount,
    })),
  );

  getFeatures(): void {
    this.featuresMockService
      .getProductFeatures()
      .pipe(
        map((features) => mapFeatureMockedResponseToState(features)),
        tap((result) => {
          this.state.next({
            ...result,
          });
        }),
      )
      .subscribe();
  }
}
