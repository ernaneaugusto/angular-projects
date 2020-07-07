import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableExpensesComponent } from './table-expenses.component';

@NgModule({
    declarations: [
        TableExpensesComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TableExpensesComponent
    ],
})
export class TableExpensesModule { }