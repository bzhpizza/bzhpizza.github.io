import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.sass"]
})
export class PizzaComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
