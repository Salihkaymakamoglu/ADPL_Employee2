import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OfficeDetailsComponent } from "./office-details/office-details.component";
import { OfficesComponent } from "./offices.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "" },
  { path: "", component: OfficesComponent },
  { path: ":id", component: OfficeDetailsComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficesRoutingModule {}
