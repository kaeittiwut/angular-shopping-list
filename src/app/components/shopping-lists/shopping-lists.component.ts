import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/ShoppingList';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css'],
})
export class ShoppingListsComponent implements OnInit {
  shoppingLists: ShoppingList[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingLists = this.shoppingListService.getShoppingList();
  }
}
