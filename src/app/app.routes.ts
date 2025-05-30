import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/product-details/product-details.page').then((p) => p.ProductDetailsPage),
    pathMatch: 'full',
  },
];
