import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesDeleteComponent } from './categories-delete.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTE: Routes = [
    { path: '', component: CategoriesDeleteComponent }
];

@NgModule({
    declarations: [
        CategoriesDeleteComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTE),
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class CategoriesDeleteModule { }