import { Component, OnInit } from "@angular/core";
import { SchedulerService } from "../../service/scheduler.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.sass"]
})
export class ScheduleComponent implements OnInit {
  public schedules = [];
  public today: number;

  constructor(private scheduler: SchedulerService) {}

  ngOnInit() {
    this.update();
  }

  update() {
    this.schedules = this.scheduler.getSchedule();
    // trigger next update tomorrow
    this.today = new Date().getDay();
    let now = new Date();
    let tomorrow_delta =
      86400000 - (60 * now.getHours() + now.getMinutes()) * 60000;
    now.setMilliseconds(now.getMilliseconds() + tomorrow_delta);
    console.log(now);
    setTimeout(() => {}, tomorrow_delta);
  }
}
