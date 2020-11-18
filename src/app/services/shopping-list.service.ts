import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingList } from '../models/ShoppingList';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  shoppingListsUrl = 'https://jsonplaceholder.typicode.com/todos';
  listsLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  // Get ShoppingLists
  getShoppingLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(
      `${this.shoppingListsUrl}${this.listsLimit}`
    );
  }

  // Delete ShoppingList
  deleteShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    const url = `${this.shoppingListsUrl}/${shoppingList.id}`;
    return this.http.delete<ShoppingList>(url, httpOptions);
  }

  // Add ShoppingList
  addShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.http.post<ShoppingList>(
      this.shoppingListsUrl,
      shoppingList,
      httpOptions
    );
  }

  // Toggle Completed
  toggleCompleted(shoppingList: ShoppingList): Observable<any> {
    const url = `${this.shoppingListsUrl}/${shoppingList.id}`;
    return this.http.put(url, shoppingList, httpOptions);
  }
}
