import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}

  getShoppingList() {
    return [
      {
        id: 1,
        title: 'One 1',
        completed: false,
      },
      {
        id: 2,
        title: 'Two',
        completed: false,
      },
      {
        id: 3,
        title: 'Three',
        completed: false,
      },
    ];
  }
}
