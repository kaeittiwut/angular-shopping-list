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
    this.shoppingListService.getShoppingLists().subscribe((shoppingLists) => {
      this.shoppingLists = shoppingLists;
    });
  }

  deleteShoppingList(shoppingList: ShoppingList): void {
    // Remove from UI
    this.shoppingLists = this.shoppingLists.filter(
      (t) => t.id !== shoppingList.id
    );
    // Remove from server
    this.shoppingListService.deleteShoppingList(shoppingList).subscribe();
  }
}
