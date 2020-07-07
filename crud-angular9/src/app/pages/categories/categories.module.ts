import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories.component';
import { TableCategoriesModule } from 'src/app/components/table-categories/table-categories.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTE: Routes = [
    { path: '', component: CategoriesComponent }
];

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTE),
        ReactiveFormsModule,
        SharedModule,
        TableCategoriesModule,
    ]
})
export class CategoriesModule { }