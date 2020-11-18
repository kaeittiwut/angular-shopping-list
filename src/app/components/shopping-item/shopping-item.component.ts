import { Component, OnInit, Input } from '@angular/core';
import { toUnicode } from 'punycode';
import { ShoppingList } from 'src/app/models/ShoppingList';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent implements OnInit {
  @Input() shoppingList: ShoppingList;

  constructor() {}

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
    shoppingList.completed = !shoppingList.completed;
  }

  onDelete(shoppingList): void {
    console.log('delete');
  }
}
