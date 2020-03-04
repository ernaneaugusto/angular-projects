import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PaiComponent } from './event-emmiter/pai/pai.component';


const ROUTES: Routes = [
  { path: '', component: PaiComponent },
  { path: 'event-emitter', component: PaiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
