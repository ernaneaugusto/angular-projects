import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';


const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: AboutComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class LazyLoadingRoutingModule { }