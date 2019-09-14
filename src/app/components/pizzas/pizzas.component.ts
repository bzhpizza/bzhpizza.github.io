import { Component, OnInit } from "@angular/core";
import { PizzasService } from "../../service/pizzas.service";

@Component({
  selector: "app-pizzas",
  templateUrl: "./pizzas.component.html",
  styleUrls: ["./pizzas.component.scss"]
})
export class PizzasComponent implements OnInit {
  public categories = [];
  public pizzas = {};
  // can be card or list
  public display: String = "cards";

  constructor(public pizza_service: PizzasService) {}

  ngOnInit() {
    this.categories = this.pizza_service.getCategories();
    this.pizzas = this.pizza_service.getPizzas();
  }

  setDisplay(display: String) {
    this.display = display;
  }
}
