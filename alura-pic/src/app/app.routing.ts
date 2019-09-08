import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

const ROUTES: Routes = [
    { path: 'user/flavio', component: PhotoListComponent },
    { path: 'photo/add', component: PhotoFormComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ]
})
export class AppRoutingModule { }