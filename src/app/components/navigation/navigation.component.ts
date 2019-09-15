import { Component, OnInit } from "@angular/core";
import { CartService } from "../../service/cart.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.sass"]
})
export class NavigationComponent implements OnInit {
  constructor(public cart: CartService) {}

  ngOnInit() {}
}
