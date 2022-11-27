import { Component, Renderer2 } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ModalService } from "./shared/services/modal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "adplllp";

  isVisible: boolean = false;
  employee: any;
  subscription$: any;

  constructor(
    private modalService: ModalService,
    private router: Router,
    private renderer: Renderer2
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const host = location.host;
        const url = event.url;
        const body = document.getElementsByTagName("body")[0];
        if (host === "payrollasyougo.co.uk") {
          this.renderer.setStyle(
            body,
            "background",
            "url(../assets/images/payroll.jpg)"
          );
        } else {
          this.renderer.setStyle(
            body,
            "background",
            "url(../assets/images/cartographer.png)"
          );
        }
        if (
          (url === "/freddie-wells" || url === "/can-kartal") &&
          host !== "payrollasyougo.co.uk"
        ) {
          document.location.href = `https://payrollasyougo.co.uk${url}`;
        }
      }
    });
  }

  ngOnInit() {
    this.subscription$ = this.modalService.modalData.subscribe((val) => {
      if (val) {
        this.isVisible = val.status;
        this.employee = val.employee;
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
