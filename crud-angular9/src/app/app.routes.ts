import { CategoriesComponent } from './components/categories/categories.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'expenses/:id', component: ExpensesComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/:id', component: CategoriesComponent },
]