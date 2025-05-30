import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/presentational/about-section/about-section.component';
import { ActionButtonsComponent } from '../../components/presentational/action-buttons/action-buttons.component';
import { HeaderComponent } from '../../components/presentational/header/header.component';
import { FeaturesComponent } from '../../components/smart/features/features.component';

@Component({
  selector: 'app-product-details',
  imports: [AboutSectionComponent, HeaderComponent, FeaturesComponent, ActionButtonsComponent],
  templateUrl: './product-details.page.html',
  styleUrl: './product-details.page.scss',
})
export class ProductDetailsPage {}
