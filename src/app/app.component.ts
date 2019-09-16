import { Component } from "@angular/core";
import { PopupService } from "./service/popup.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "braiz-pizza";

  constructor(public popup: PopupService) {}
}
