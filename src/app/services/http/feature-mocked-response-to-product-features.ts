import { FeatureMockResponse } from '../../models/feature-mock-response';
import { ProductFeatures } from '../../domain/product-features';
import { FeatureIndicator } from '../../domain/feature-indicator';
import { FavoriteIndicator } from '../../domain/features-indicators/favorite-indicator';
import { DiscountIndicator } from '../../domain/features-indicators/discount-indicator';

export function mapFeatureMockedResponseToProductFeatures(featuresResponse: FeatureMockResponse): ProductFeatures {
  const features: FeatureIndicator[] = [];

  if (featuresResponse.isFavorite) {
    features.push(new FavoriteIndicator(featuresResponse.isFavorite));
  }

  if (featuresResponse.hasDiscount) {
    features.push(new DiscountIndicator(featuresResponse.hasDiscount));
  }

  return new ProductFeatures(features);
}
