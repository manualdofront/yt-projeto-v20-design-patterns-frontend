import { FeatureType } from '../../models/feature-type';
import { FeatureIndicator } from '../feature-indicator';

export class DiscountIndicator extends FeatureIndicator {
  constructor(private readonly _hasDiscount: boolean) {
    super(FeatureType.Discount);
  }

  isVisible(): boolean {
    return this.hasFeature();
  }

  hasFeature(): boolean {
    return this._hasDiscount;
  }
}
