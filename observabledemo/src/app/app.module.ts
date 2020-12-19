import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumeComponent } from './consume/consume.component';
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ContactsComponent,
    ConsumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
