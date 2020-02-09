import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyLoadingRoutingModule } from "./lazy-loading-routing.module";
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        LazyLoadingRoutingModule
    ]
})

export class LazyLoadingModule { }