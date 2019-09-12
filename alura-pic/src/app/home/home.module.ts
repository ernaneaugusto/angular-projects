import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [ 
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule
  ]
})
export class HomeModule { }
