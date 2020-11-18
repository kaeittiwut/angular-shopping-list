import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.component.html',
  styleUrls: ['./add-shopping-list.component.css'],
})
export class AddShoppingListComponent implements OnInit {
  @Output() addShoppingList: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const shoppingList = {
      title: this.title,
      completed: false,
    };

    this.addShoppingList.emit(shoppingList);
  }
}
