import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// registrando formato de data padrao BR. Utilizar campoData | date: 'dd/MM/yyyy'
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

import { AppComponent } from './app.component';
import { CategoriesService } from './services/categories/categories.service';
import { ExpensesService } from './services/expenses/expenses.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    // configuracoes para campos padrao BR
    { provide: LOCALE_ID, useValue: "pt-BR" },
    CategoriesService,
    ExpensesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
