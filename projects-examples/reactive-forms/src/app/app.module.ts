import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FilhoComponent } from './event-emmiter/filho/filho.component';
import { PaiComponent } from './event-emmiter/pai/pai.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FilhoComponent,
    PaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
