import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-office-details",
  templateUrl: "./office-details.component.html",
  styleUrls: ["./office-details.component.scss"],
})
export class OfficeDetailsComponent implements OnInit {
  office: any;
  @ViewChild("head") head: any;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    this.office = state?.["office"];

    if (!this.office) {
      this.router.navigate(["/offices"]);
    }
  }

  ngOnInit(): void {
    console.log(this.office);
    this.goToTop();
  }

  goToTop() {
    window.scrollTo(0, 0);
    // this.head.nativeElement.scrollIntoView({
    //   behavior: "smooth",
    // });
  }
}
