import { Injectable } from "@angular/core";
import { PIZZAS } from "../data/pizzas";

@Injectable({
  providedIn: "root"
})
export class PizzasService {
  constructor() {}

  getPizzas() {
    return PIZZAS;
  }

  getCategories() {
    return Object.keys(PIZZAS);
  }
}
