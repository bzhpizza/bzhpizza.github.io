import * as $ from "jquery";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzasComponent } from "./components/pizzas/pizzas.component";
import { PizzaComponent } from "./components/pizza/pizza.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { CartPopupComponent } from "./components/cart-popup/cart-popup.component";
import { OrderComponent } from "./components/order/order.component";
import { ConfirmationPopupComponent } from "./components/confirmation-popup/confirmation-popup.component";
import { TrustPipe } from "./pipe/trust.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaComponent,
    ScheduleComponent,
    NavigationComponent,
    CartPopupComponent,
    OrderComponent,
    ConfirmationPopupComponent,
    TrustPipe
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
