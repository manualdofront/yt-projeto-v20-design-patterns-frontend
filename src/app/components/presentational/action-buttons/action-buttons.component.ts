import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureType } from '../../../models/feature-type';
import { FeaturesService, FeatureState } from '../../../services/view/features.service';

@Component({
  selector: 'app-action-buttons',
  imports: [AsyncPipe],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss',
})
export class ActionButtonsComponent {
  private readonly featuresService = inject(FeaturesService);

  readonly FeatureType: typeof FeatureType = FeatureType;
  readonly featuresState$: Observable<FeatureState> = this.featuresService.featuresState$;
}
