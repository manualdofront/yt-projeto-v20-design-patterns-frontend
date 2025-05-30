import { FeatureType } from '../models/feature-type';
import { FeatureIndicator } from './feature-indicator';

export class ProductFeatures {
  constructor(public features: FeatureIndicator[]) {}

  isSectionVisible(): boolean {
    return this.features.some((feature: FeatureIndicator) => feature.isVisible());
  }

  isFeatureVisible(feature: FeatureType): boolean {
    return this.features.some((item: FeatureIndicator) => item.type === feature && item.isVisible());
  }

  getFeature(feature: FeatureType): FeatureIndicator | undefined {
    return this.features.find((item: FeatureIndicator) => item.type === feature);
  }
}
