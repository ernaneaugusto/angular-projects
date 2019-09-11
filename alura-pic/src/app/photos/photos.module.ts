import { NgModule } from "@angular/core";

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
    declarations: [],
    imports: [
        PhotoFormModule,
        PhotoListModule,
        CardModule
    ]
})

export class PhotoModule {

}