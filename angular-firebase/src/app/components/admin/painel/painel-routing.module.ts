import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel.component';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
