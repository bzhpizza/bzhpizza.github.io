import { Injectable } from "@angular/core";
import { schedule } from "../data/schedule";

@Injectable({
  providedIn: "root"
})
export class SchedulerService {
  private schedule = schedule;

  constructor() {}

  public getSchedule() {
    return this.schedule;
  }
}
