import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home.component';


const ROUTES: Routes = [
    { path: '', component: HomeComponent }
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