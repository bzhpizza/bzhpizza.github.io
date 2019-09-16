import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PopupService {
  public show: boolean = false;
  public title: string = "";
  public message: string = "";
  public dismiss: string = "";
  public choice: boolean = false;
  public submitCallback: (choice: boolean) => any;

  constructor() {}

  confirmation(title: string, message: string, dismiss: string) {
    this.title = title;
    this.message = message;
    this.dismiss = dismiss;
    $("#confirmation-popup").modal("show");
  }

  onSubmit(callback: (choice: boolean) => any) {
    this.submitCallback = callback;
  }

  submit() {
    console.log(this.choice);
    this.submitCallback(this.choice);
    $("#confirmation-popup").modal("hide");
  }
}
