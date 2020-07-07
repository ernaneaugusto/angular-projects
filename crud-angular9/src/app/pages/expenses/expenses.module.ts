import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesComponent } from './expenses.component';
import { TableExpensesModule } from 'src/app/components/table-expenses/table-expenses.module';
import { FormExpensesModule } from 'src/app/components/form-expenses/form-expenses.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const ROUTE: Routes = [
    { path: '', component: ExpensesComponent }
];

@NgModule({
    declarations: [
        ExpensesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTE),
        TableExpensesModule,
        SharedModule,
        FormExpensesModule
    ]
})
export class ExpensesModule { }