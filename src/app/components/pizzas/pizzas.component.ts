import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";

@Component({
  selector: "app-pizzas",
  templateUrl: "./pizzas.component.html",
  styleUrls: ["./pizzas.component.scss"]
})
export class PizzasComponent implements OnInit {
  public categories = [];
  public pizzas = {};

  constructor(public pizza_service: PizzasService) {}

  ngOnInit() {
    this.categories = this.pizza_service.getCategories();
    this.pizzas = this.pizza_service.getPizzas();
  }
}
