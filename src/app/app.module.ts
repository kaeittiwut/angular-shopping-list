import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';

@NgModule({
  declarations: [AppComponent, ShoppingListsComponent, ShoppingItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
