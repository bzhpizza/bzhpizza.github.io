import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzasComponent } from "./components/pizzas/pizzas.component";
import { PizzaComponent } from "./components/pizza/pizza.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { CartPopupComponent } from "./components/cart-popup/cart-popup.component";
import { OrderComponent } from "./components/order/order.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaComponent,
    ScheduleComponent,
    NavigationComponent,
    CartPopupComponent,
    OrderComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
