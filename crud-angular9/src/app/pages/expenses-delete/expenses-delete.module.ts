import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesDeleteComponent } from './expenses-delete.component';
import { FormExpensesModule } from 'src/app/components/form-expenses/form-expenses.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTE: Routes = [
    { path: '', component: ExpensesDeleteComponent }
];

@NgModule({
    declarations: [
        ExpensesDeleteComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTE),
        SharedModule,
        FormExpensesModule
    ]
})
export class ExpensesDeleteModule { }