import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AlertMessageComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BreadcrumbComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AlertMessageComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
