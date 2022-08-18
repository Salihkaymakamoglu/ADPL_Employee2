import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { PagesRoutingModule } from "./pages-routing.module";

import { SharedModule } from "../shared/shared.module";

import { Index2Component } from "./index2/index2.component";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ThankYouPageComponent } from "../thank-you-page/thank-you-page.component";
import { NgxVcardModule } from "ngx-vcard";

@NgModule({
  declarations: [
    Index2Component,
    ThankYouPageComponent
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    NgxSkeletonLoaderModule,
    NgxVcardModule,
   
  ],
})
export class PagesModule {}
