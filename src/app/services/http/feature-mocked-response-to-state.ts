import { FeatureMockResponse } from '../../models/feature-mock-response';
import { FeatureState } from '../view/features.service';

export function mapFeatureMockedResponseToState(featuresResponse: FeatureMockResponse): FeatureState {
  return {
    isFavorite: featuresResponse?.isFavorite || false,
    hasDiscount: featuresResponse?.hasDiscount || false,
    rating: featuresResponse?.rating || { total: 0, current: 0 },
  };
}
