import { NgModule } from "@angular/core";

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    declarations: [],
    imports: [
        PhotoFormModule,
        PhotoListModule
    ]
})

export class PhotoModule {

}