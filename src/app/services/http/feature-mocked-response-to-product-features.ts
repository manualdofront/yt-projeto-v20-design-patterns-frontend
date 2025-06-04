import { FeatureIndicator } from '../../domain/feature-indicator';
import { DiscountIndicator } from '../../domain/features-indicators/discount-indicator';
import { FavoriteIndicator } from '../../domain/features-indicators/favorite-indicator';
import { ProductFeatures } from '../../domain/product-features';
import { FeatureMockResponse } from '../../models/feature-mock-response';

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
