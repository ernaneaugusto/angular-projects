import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategyService } from './selective-strategy-to-lazy-loading.service';

const ROUTES: Routes = [
    { path: 'home', redirectTo: 'welcome', pathMatch: 'full' }, // redirecionamento de rotas
    {
        path: 'products',
        // canActivate: [AuthGuard], // canActivate: protege a navegacao para uma rota carregando seus arquivos na aba Network do navegador 
        canActivate: [AuthGuard], // canLoad: protege a navegacao para uma rota e nao permite o carregamento dos arquivos do modulo na aba Network do navegador, protegendo os os modulos carregados com Lazy Loading
        // data: { preload: true }, // utilizado para informar que o modulo deve ser carregado em segundo plano. Eh preciso utilizar o canActivate ao inves do canLoad e definir { preloadingStrategy: SelectiveStrategy } em RouterModule.forRoot
        loadChildren: () => import('./products/product.module').then(module => module.ProductModule)
    },
    { path: 'welcome', component: WelcomeComponent },
    { path: '**', component: PageNotFoundComponent } // **: usado para definir componente a ser carregado caso rota acessada nao exista
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            //{ enableTracing: true } // enableTracing: habilita debug de navegacao a cada rota acessada(ver console do navegador)
            // { preloadingStrategy: PreloadAllModules }  // PreloadAllModules: eh utilizado para carregar em segundo plano os TODOS os modulos configurados com lazy loading. Para utiliza-lo eh necessario utilizar canActivate, ja que o canLoad permite o carregamento do modulo apenas quando algum arquivo desse modulo eh acessado
            // { preloadingStrategy: SelectiveStrategyService }
        ) 
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }