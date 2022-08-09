import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "express";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})

/**
 * Contact component
 */
export class ContactComponent implements OnInit {
  @Input() email: any;
  @Input() firstName: any;
  @Input() lastName: any;

  @ViewChild("name") name: any;
  employee: any = {};
  returnUrl: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(location);
    this.returnUrl = location.origin + "/thank-you-page";
    
  }

  saveEmployee(event: any) {
    event.preventDefault();
    const inpValue = event.target.value;
    this.employee.employeeName = this.firstName + " " + this.lastName;
    this.employee.contactName = inpValue;
    this.employee.route = location.href;

    localStorage.setItem("formData", JSON.stringify(this.employee));
    console.log(this.employee);
  }

  goToBottom() {
    // window.scrollTo(0, document.body.scrollHeight);
    this.name.nativeElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}
