import { CategoriesDeleteComponent } from './pages/categories-delete/categories-delete.component';
import { CategoriesEditComponent } from './pages/categories-edit/categories-edit.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'expenses/:id', component: ExpensesComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/edit/:id', component: CategoriesEditComponent },
    { path: 'categories/delete/:id', component: CategoriesDeleteComponent },
]