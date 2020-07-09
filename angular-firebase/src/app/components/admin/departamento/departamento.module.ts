import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { SharedModule } from 'primeng/components/common/shared';
import { ComumModule } from 'src/app/modules/comum/comum.module';


@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComumModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule,
  ]
})
export class DepartamentoModule { }
