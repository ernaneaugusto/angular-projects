import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { 
    path: '',
    loadChildren: () => 
      import('./modules/lazy-loading/lazy-loading.module')
      .then(module => module.LazyLoadingModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
