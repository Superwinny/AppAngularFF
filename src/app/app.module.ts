import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeElementComponent } from './recipe-element/recipe-element.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderPageComponent,
    RecipeElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
