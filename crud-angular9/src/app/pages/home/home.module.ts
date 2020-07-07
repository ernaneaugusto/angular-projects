import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FormExpensesModule } from 'src/app/components/form-expenses/form-expenses.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CardAmountItemsComponent } from 'src/app/components/card-amount-items/card-amount-items.component';

const ROUTE: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    CardAmountItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    SharedModule,
    FormExpensesModule
  ]
})
export class HomeModule { }
