import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableCategoriesComponent } from './table-categories.component';

@NgModule({
    declarations: [
        TableCategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ], exports: [
        TableCategoriesComponent
    ]
})
export class TableCategoriesModule { }