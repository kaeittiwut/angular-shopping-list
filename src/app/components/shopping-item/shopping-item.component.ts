import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent implements OnInit {
  @Input() shoppingList: ShoppingList;
  @Output() deleteShoppingList: EventEmitter<ShoppingList> = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      shoppingList: true,
      'is-complete': this.shoppingList.completed,
    };
    return classes;
  }

  onToggle(shoppingList): void {
    // Toggle in UI
    shoppingList.completed = !shoppingList.completed;
    // Toggle on server
    this.shoppingListService
      .toggleCompleted(shoppingList)
      .subscribe((shoppingList) => console.log(shoppingList));
  }

  onDelete(shoppingList): void {
    this.deleteShoppingList.emit(shoppingList);
  }
}
