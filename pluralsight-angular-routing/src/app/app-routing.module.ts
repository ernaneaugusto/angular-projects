import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const ROUTES: Routes = [
    { path: 'home', redirectTo: 'welcome', pathMatch: 'full' }, // redirecionamento de rotas
    { path: 'welcome', component: WelcomeComponent },
    { path: '**', component: PageNotFoundComponent } // **: usado para definir componente a ser carregado caso rota acessada nao exista
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            //{ enableTracing: true }
        ) // enableTracing: habilita debug de navegacao a cada rota acessada(ver console do navegador)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }