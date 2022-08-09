import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Index2Component } from "./index2/index2.component";
import { ThankYouPageComponent } from "../thank-you-page/thank-you-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "adpl",
    pathMatch: "full",
  },
  {
    path: "thank-you-page",
    component: ThankYouPageComponent,
  },
  {
    path: ":id",
    component: Index2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
