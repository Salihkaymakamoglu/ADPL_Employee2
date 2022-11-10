import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';

import { PagesModule } from './mainpage/pages.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { EmployeeListComponent } from './employees-list/employees-list.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { NgxVcardModule } from 'ngx-vcard';
import { NzModalModule } from 'ng-zorro-antd/modal';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxVcardModule,
    NzModalModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
