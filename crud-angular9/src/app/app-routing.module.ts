import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rotas: Routes = [ // @TODO: colocar as urls do arquivo de URLs
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(home => home.HomeModule)
    },
    {
        path: 'expenses',
        loadChildren: () => import('./pages/expenses/expenses.module').then(expenses => expenses.ExpensesModule)
    },
    {
        path: 'expenses/edit/:id',
        loadChildren: () => import('./pages/expenses-edit/expenses-edit.module').then(expensesEdit => expensesEdit.ExpensesEditModule)
    },
    {
        path: 'expenses/delete/:id',
        loadChildren: () => import('./pages/expenses-delete/expenses-delete.module').then(expensesDelete => expensesDelete.ExpensesDeleteModule)
    },
    {
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories.module').then(categories => categories.CategoriesModule)
    },
    {
        path: 'categories/edit/:id',
        loadChildren: () => import('./pages/categories-edit/categories-edit.module').then(categoriesEdit => categoriesEdit.CategoriesEditModule)
    },
    {
        path: 'categories/delete/:id',
        loadChildren: () => import('./pages/categories-delete/categories-delete.module').then(categoriesDelete => categoriesDelete.CategoriesDeleteModule)
    },
]


@NgModule({
    imports: [
        //Aqui importamos as rotas
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }