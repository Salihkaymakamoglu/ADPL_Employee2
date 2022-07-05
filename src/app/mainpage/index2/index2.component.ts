import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/employees-list/employees/employees.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-index2",
  templateUrl: "./index2.component.html",
  styleUrls: ["./index2.component.scss"],
})

export class Index2Component implements OnInit {
  id: any;
  employee: any;


  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  currentSection = "home";

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getEmployeeById(this.id);
  }

  async getEmployeeById(id:string): Promise<any>{
     const person = await this.employeeService.getEmployeeById(id);
     this.employee = person[0]
    console.log(this.employee);
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar: any = document.getElementById("navbar");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      navbar.style.backgroundColor = "#1a1a1a";
      navbar.style.padding = "15px 0px";
    } else {
      navbar.style.backgroundColor = "";
      navbar.style.padding = "20px";
    }
  }
  
  openInNewTab(url: string){
    window.open(url);
}


}
