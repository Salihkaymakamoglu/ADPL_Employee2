import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import {MatCardModule} from '@angular/material/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { OfficeDetailsComponent } from './office-details/office-details.component';



@NgModule({
  declarations: [
    OfficesComponent,
    OfficeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OfficesRoutingModule,
    MatCardModule,
    NzCarouselModule
  ]
})
export class OfficesModule { }
