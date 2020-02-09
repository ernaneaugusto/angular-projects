import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyLoadingRoutingModule } from "./lazy-loading-routing.module";
import { HomeComponent } from 'src/app/components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        LazyLoadingRoutingModule
    ]
})

export class LazyLoadingModule { }