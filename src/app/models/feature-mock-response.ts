export interface FeatureMockResponse {
  isFavorite: boolean;
  rating: {
    total: number;
    current: number;
  };
  hasDiscount: boolean;
}
