import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { PagesRoutingModule } from "./pages-routing.module";

import { SharedModule } from "../shared/shared.module";

import { Index2Component } from "./index2/index2.component";

@NgModule({
  declarations: [
    Index2Component,
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
   
  ],
})
export class PagesModule {}
