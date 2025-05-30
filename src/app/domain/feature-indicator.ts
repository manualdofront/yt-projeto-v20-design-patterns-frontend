import { FeatureType } from '../models/feature-type';

export abstract class FeatureIndicator {
  constructor(public type: FeatureType) {}
  abstract isVisible(): boolean;
  abstract hasFeature(): boolean;
}
