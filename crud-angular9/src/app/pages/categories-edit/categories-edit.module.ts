import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesEditComponent } from './categories-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const ROUTE: Routes = [
    { path: '', component: CategoriesEditComponent }
];

@NgModule({
    declarations: [
        CategoriesEditComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTE),
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class CategoriesEditModule { }