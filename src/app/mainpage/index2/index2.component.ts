import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
("@angular/core");
import { EmployeeService } from "src/app/employees-list/employees/employees.service";
import { ActivatedRoute } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";
// import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-index2",
  templateUrl: "./index2.component.html",
  styleUrls: ["./index2.component.scss"],
  animations: [
    trigger("outAnimation", [
      transition(":leave", [
        style({ opacity: 1 }),
        animate("750ms", style({ opacity: 0 })),
      ]),
    ]),
    trigger("inAnimation", [
      transition(":enter", [
        style({ display: "none" }),
        animate("750ms", style({ display: "block" })),
      ]),
    ]),
  ],
})
export class Index2Component implements OnInit {
  id: any;
  employee: any;
  deviceInfo: any;
  title = "ngifAnimation";
  // isMobile: boolean = false;
  // isTablet: boolean = false;
  // isDesktop: boolean = false;
  contentLoading: boolean = true;
  idchecked: boolean = true;
  idValid: boolean = true;
  @ViewChild("contact") contact: any;

  location = window.location

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute // private deviceService: DeviceDetectorService
  ) {
    //   this.epicFunction();
  }

  currentSection = "home";

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getEmployeeById(this.id);
  }

  async getEmployeeById(id: string): Promise<any> {
    const person = await this.employeeService.getEmployeeById(id);
    this.employee = person[0];
    this.contentLoading = false;
    if (this.id !== this.employee?.id) {
      this.idValid = false;
    }
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  // windowScroll() {
  //   const navbar: any = document.getElementById("navbar");
  //   if (
  //     document.body.scrollTop > 40 ||
  //     document.documentElement.scrollTop > 40
  //   ) {
  //     navbar.style.backgroundColor = "#1a1a1a";
  //     navbar.style.padding = "15px 0px";
  //   } else {
  //     navbar.style.backgroundColor = "";
  //     navbar.style.padding = "20px";
  //   }
  // }

  goToBottom() {
    this.contact.goToBottom();
  }

  openInNewTab(url: string): void {
    if (url) {
      window.open(url);
    }
  }

  // epicFunction() {
  //   console.log("hello `Home` component");
  //   this.deviceInfo = this.deviceService.getDeviceInfo();
  //   this.isMobile = this.deviceService.isMobile();
  //   this.isTablet = this.deviceService.isTablet();
  //   this.isDesktop = this.deviceService.isDesktop();
  //   console.log(this.deviceInfo);
  //   console.log(this.isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
  //   console.log(this.isTablet); // returns if the device us a tablet (iPad etc)
  //   console.log(this.isDesktop); // returns if the app is running on a Desktop browser.
  // }
}
