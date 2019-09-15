import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  public summary = {
    price: 0,
    count: 0,
    pizzas: {}
  };

  constructor() {}

  add(pizza) {
    this.summary.count += 1;
    this.summary.price += pizza.prix;

    if (this.summary.pizzas[pizza.nom] === undefined) {
      this.summary.pizzas[pizza.nom] = pizza;
      pizza.number = 1;
    } else {
      this.summary.pizzas[pizza.nom].number++;
    }
  }

  reset() {
    this.summary = {
      price: 0,
      count: 0,
      pizzas: {}
    };
  }
}
