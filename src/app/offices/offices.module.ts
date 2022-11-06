import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    OfficesComponent
  ],
  imports: [
    CommonModule,
    OfficesRoutingModule,
    MatCardModule
  ]
})
export class OfficesModule { }
