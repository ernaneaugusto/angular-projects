import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// registrando formato de data padrao BR. Utilizar campoData | date: 'dd/MM/yyyy'
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainHomeComponent } from './components/layout/main-home/main-home.component';
import { MainExpensesComponent } from './components/layout/main-expenses/main-expenses.component';
import { FormExpensesComponent } from './shared/components/form-expenses/form-expenses.component';

import { CategoriesService } from './services/categories/categories.service';
import { CategoriesEditComponent } from './pages/categories-edit/categories-edit.component';
import { MainCategoriesEditComponent } from './components/layout/main-categories-edit/main-categories-edit.component';
import { MainCategoriesDeleteComponent } from './components/layout/main-categories-delete/main-categories-delete.component';
import { CategoriesDeleteComponent } from './pages/categories-delete/categories-delete.component';
import { ExpensesService } from './services/expenses/expenses.service';
import { LoaderComponent } from './shared/components/loader.component';
import { TableExpensesComponent } from './components/table-expenses/table-expenses.component';
import { TableCategoriesComponent } from './components/table-categories/table-categories.component';
import { ExpensesEditComponent } from './pages/expenses-edit/expenses-edit.component';
import { MainExpensesEditComponent } from './components/layout/main-expenses-edit/main-expenses-edit.component';
import { AlertMessageComponent } from './shared/components/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesComponent,
    CategoriesComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent,
    FooterComponent,
    MainHomeComponent,
    MainExpensesComponent,
    FormExpensesComponent,
    CategoriesEditComponent,
    MainCategoriesEditComponent,
    MainCategoriesDeleteComponent,
    CategoriesDeleteComponent,
    LoaderComponent,
    TableExpensesComponent,
    TableCategoriesComponent,
    ExpensesEditComponent,
    MainExpensesEditComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { // configuracoes para campos padrao BR
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    CategoriesService,
    ExpensesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
