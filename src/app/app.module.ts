import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaComponent } from './components/pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
