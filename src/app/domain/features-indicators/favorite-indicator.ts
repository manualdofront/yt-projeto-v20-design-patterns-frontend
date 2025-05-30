import { FeatureType } from '../../models/feature-type';
import { FeatureIndicator } from '../feature-indicator';

export class FavoriteIndicator extends FeatureIndicator {
  constructor(private readonly _isFavorite: boolean) {
    super(FeatureType.Favorite);
  }

  isVisible(): boolean {
    return this.hasFeature();
  }

  hasFeature(): boolean {
    return this._isFavorite;
  }
}
