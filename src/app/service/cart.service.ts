import { Injectable, OnInit } from "@angular/core";
import { StorageService } from "./storage.service";
import { PopupService } from "./popup.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  public summary = {
    price: 0,
    count: 0,
    pizzas: {}
  };

  constructor(private storage: StorageService, private popup: PopupService) {
    this.popup.onSubmit(this.popupPreferenceSetter());
  }

  popupPreferenceSetter() {
    return (hide: boolean) => {
      console.log("set popup preference");
      console.log(hide);
      this.storage.set("show_popup", !hide);
    };
  }

  add(pizza) {
    console.log("add show preference");
    console.log(this.showPopup());
    if (this.showPopup() === true) {
      this.popup.confirmation(
        'La pizza a été ajoutée à la commande <i class="fa fa-shopping-cart"></i>',
        "Ne plus afficher ce message",
        "ok"
      );
    }

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

  showPopup() {
    if (this.storage.get("show_popup") === null) {
      this.storage.set("show_popup", true);
    }
    return this.storage.get("show_popup");
  }
}
