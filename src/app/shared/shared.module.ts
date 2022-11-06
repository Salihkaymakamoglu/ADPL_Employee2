import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact/contact.component";
import { ScrollspyDirective } from "./scrollspy.directive";
import { ContactIasyougoComponent } from "./contact-iasyougo/contact-iasyougo.component";

@NgModule({
  declarations: [
    ContactComponent,
    ScrollspyDirective,
    ContactIasyougoComponent,
  ],
  imports: [CommonModule],
  exports: [ContactIasyougoComponent, ContactComponent, ScrollspyDirective],
})
export class SharedModule {}
