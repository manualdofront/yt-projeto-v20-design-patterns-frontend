import { FeatureType } from '../../models/feature-type';
import { FeatureIndicator } from '../feature-indicator';

export class RatingIndicator extends FeatureIndicator {
  constructor(
    readonly _total: number,
    readonly _current: number,
    private readonly _hasDiscount: boolean,
  ) {
    super(FeatureType.Rating);
  }

  isVisible(): boolean {
    return this._current > 0 && !this._hasDiscount;
  }

  hasFeature(): boolean {
    // TODO
    return true;
  }
}
