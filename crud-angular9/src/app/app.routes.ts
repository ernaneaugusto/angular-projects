import { CategoriesComponent } from './pages/categories/categories.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'expenses/:id', component: ExpensesComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/:id', component: CategoriesComponent },
]