import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormExpensesComponent } from './form-expenses.component';

@NgModule({
    declarations: [
        FormExpensesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        FormExpensesComponent,
    ]
})
export class FormExpensesModule { }
