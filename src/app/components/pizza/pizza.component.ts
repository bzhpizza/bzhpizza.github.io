import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../../service/cart.service";

@Component({
  selector: "pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.sass"]
})
export class PizzaComponent implements OnInit {
  @Input() data: any;
  @Input() display: String;

  constructor(private cart: CartService) {}

  ngOnInit() {}

  addToCart() {
    this.cart.add(this.data);
  }
}
