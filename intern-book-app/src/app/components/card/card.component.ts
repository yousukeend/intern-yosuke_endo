import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../types/ book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() book: Book = {
    name: '',
    detail: '',
    evaluation: 0,
  };

  @Output() onDelete = new EventEmitter();

  _onDelete() {
    this.onDelete.emit();
  }
}
