import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContainerWithRowComponent } from 'src/app/shared/components/container-with-row/container-with-row.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ContainerWithRowComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})

export class SharedModule { }