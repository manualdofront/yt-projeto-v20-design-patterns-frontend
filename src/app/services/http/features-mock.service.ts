import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeatureMockResponse } from '../../models/feature-mock-response';

@Injectable({
  providedIn: 'root',
})
export class FeaturesMockService {
  getProductFeatures(): Observable<FeatureMockResponse> {
    return of({
      isFavorite: true,
      rating: {
        total: 10,
        current: 8,
      },
      hasDiscount: true,
    });
  }
}
