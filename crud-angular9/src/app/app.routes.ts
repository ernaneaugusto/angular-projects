import { CategoriesDeleteComponent } from './pages/categories-delete/categories-delete.component';
import { CategoriesEditComponent } from './pages/categories-edit/categories-edit.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ExpensesEditComponent } from './pages/expenses-edit/expenses-edit.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'expenses/edit/:id', component: ExpensesEditComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/edit/:id', component: CategoriesEditComponent },
    { path: 'categories/delete/:id', component: CategoriesDeleteComponent },
]