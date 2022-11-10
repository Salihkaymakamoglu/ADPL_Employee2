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
    const state: any = this.router.getCurrentNavigation()?.extras?.state;

    if (!state) {
      this.router.navigate(["/offices"]);
    } else {
      this.office = state?.office;
    }
  }

  ngOnInit(): void {
    
    this.goToTop();
  }

  goToTop() {
    window.scrollTo(0, 0);
    // this.head.nativeElement.scrollIntoView({
    //   behavior: "smooth",
    // });
  }
}
