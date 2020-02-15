import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
