import { Component, Input } from '@angular/core';
import { Book } from '../../types/ book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // メモ：
  // @Input() bookShow?:
  @Input() book: Book = {
    name:"",
    detail:"",
    evaluation: 0
  }
}
