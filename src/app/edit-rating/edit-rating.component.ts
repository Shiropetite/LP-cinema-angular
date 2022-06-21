import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-rating',
  templateUrl: './edit-rating.component.html',
  styleUrls: ['./edit-rating.component.scss']
})
export class EditRatingComponent {
  @Input() rating: number = 0;
  @Output() onUpdate = new EventEmitter<number>()

  updateRating(newRate: number): void {
    this.onUpdate.emit(newRate);
  }
}
