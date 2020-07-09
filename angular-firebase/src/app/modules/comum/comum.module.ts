import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PrimeNGModule
  ],
})
export class ComumModule { }
