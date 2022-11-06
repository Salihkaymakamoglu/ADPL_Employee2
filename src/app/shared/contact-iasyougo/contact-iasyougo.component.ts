import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-iasyougo",
  templateUrl: "./contact-iasyougo.component.html",
  styleUrls: ["./contact-iasyougo.component.scss"],
})
export class ContactIasyougoComponent implements OnInit {
  @Input() email: any;
  @Input() firstName: any;

  returnUrl: string = "";

  constructor() {}

  ngOnInit(): void {
    this.returnUrl = location.origin + "/offices";
  }
}
