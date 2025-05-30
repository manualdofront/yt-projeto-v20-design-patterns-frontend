export interface FeatureMockResponse {
  isFavorite: boolean;
  isNewRelease: boolean;
  rating: {
    total: number;
    current: number;
  };
  hasDiscount: boolean;
}
