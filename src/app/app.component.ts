import { Component } from "@angular/core";
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

  constructor(private modalService: ModalService) {}

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
