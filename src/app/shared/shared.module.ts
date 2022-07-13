import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";



import { ContactComponent } from "./contact/contact.component";
import { ScrollspyDirective } from "./scrollspy.directive";

@NgModule({
  declarations: [
  
    ContactComponent,
    ScrollspyDirective,
  ],
  imports: [CommonModule],
  exports: [
   
    
    ContactComponent,
    ScrollspyDirective,
  ],
})
export class SharedModule {}
