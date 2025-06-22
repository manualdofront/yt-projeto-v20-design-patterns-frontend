import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  readonly totalRating: InputSignal<number> = input<number>(0);
  readonly currentRating: InputSignal<number> = input<number>(0);
}
