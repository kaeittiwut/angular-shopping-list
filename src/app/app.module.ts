import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddShoppingListComponent } from './components/add-shopping-list/add-shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListsComponent,
    ShoppingItemComponent,
    HeaderComponent,
    AddShoppingListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
