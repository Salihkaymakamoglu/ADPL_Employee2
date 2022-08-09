import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: "app-thank-you-page",
  templateUrl: "./thank-you-page.component.html",
  styleUrls: ["./thank-you-page.component.scss"],
})
export class ThankYouPageComponent implements OnInit {
  router: any;
  constructor() {}

  formData = JSON.parse(String(localStorage.getItem("formData")));

  ngOnInit(): void {
    console.log(this.formData);
  }
  ngOnDestroy(): void {
    localStorage.clear();
  }
  goBack() {
    
    this.router.navigateByUrl('this.formData.route');

  }
}
