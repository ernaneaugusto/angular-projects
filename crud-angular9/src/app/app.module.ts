import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { MainCategoriesComponent } from './components/layout/main-categories/main-categories.component';
import { FormExpensesComponent } from './shared/components/form-expenses/form-expenses.component';

import { CategoriesService } from './services/categories/categories.service';

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
    MainCategoriesComponent,
    FormExpensesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
