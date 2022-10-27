import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OfficesComponent } from "./offices.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "" },
  { path: "", component: OfficesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficesRoutingModule {}
