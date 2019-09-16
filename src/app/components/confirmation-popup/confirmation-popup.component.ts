import { Component, OnInit, Input } from "@angular/core";
import { StorageService } from "src/app/service/storage.service";
import { PopupService } from "src/app/service/popup.service";

@Component({
  selector: "app-confirmation-popup",
  templateUrl: "./confirmation-popup.component.html",
  styleUrls: ["./confirmation-popup.component.sass"]
})
export class ConfirmationPopupComponent implements OnInit {
  @Input() title: string;
  @Input() question: string;
  @Input() dismiss: string;
  @Input() choice: boolean;

  constructor(private storage: StorageService, public popup: PopupService) {}

  ngOnInit() {}

  dontShowPopupAnymore() {
    console.log("dont show anymore");
    this.storage.set("show_popup", false);
  }
}
