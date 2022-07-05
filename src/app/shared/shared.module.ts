import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";


import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { ScrollspyDirective } from "./scrollspy.directive";

@NgModule({
  declarations: [
    ServicesComponent,
    ContactComponent,
    ScrollspyDirective,
  ],
  imports: [CommonModule],
  exports: [
    ServicesComponent,
    
    ContactComponent,
    ScrollspyDirective,
  ],
})
export class SharedModule {}
