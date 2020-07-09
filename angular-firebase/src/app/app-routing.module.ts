import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { AuthguardService } from './services/authguard.service';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin/painel',
        loadChildren: () => import('./components/admin/painel/painel.module').then(p => p.PainelModule),
        canActivate: [AuthguardService]
    },
    {
        path: 'admin/departamento',
        loadChildren: () => import('./components/admin/departamento/departamento.module').then(depto => depto.DepartamentoModule),
        canActivate: [AuthguardService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
