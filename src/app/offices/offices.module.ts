import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import {MatCardModule} from '@angular/material/card';
import { OfficeDetailsComponent } from './office-details/office-details.component';



@NgModule({
  declarations: [
    OfficesComponent,
    OfficeDetailsComponent
  ],
  imports: [
    CommonModule,
    OfficesRoutingModule,
    MatCardModule
  ]
})
export class OfficesModule { }
