import { Component, OnInit } from "@angular/core";
import { CartService } from "../../service/cart.service";

@Component({
  selector: "app-cart-popup",
  templateUrl: "./cart-popup.component.html",
  styleUrls: ["./cart-popup.component.sass"]
})
export class CartPopupComponent implements OnInit {
  constructor(public cart: CartService) {}

  ngOnInit() {}

  emptyCart() {
    this.cart.reset();
  }
}
