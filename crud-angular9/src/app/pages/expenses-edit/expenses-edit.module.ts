import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesEditComponent } from '../expenses-edit/expenses-edit.component';
import { FormExpensesModule } from 'src/app/components/form-expenses/form-expenses.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTE: Routes = [
    { path: '', component: ExpensesEditComponent }
];

@NgModule({
    declarations: [
        ExpensesEditComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTE),
        SharedModule,
        FormExpensesModule
    ]
})
export class ExpensesEditModule { }