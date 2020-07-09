import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        FieldsetModule,
        InputMaskModule,
        MessagesModule,
        MessageModule,
        CheckboxModule,
        TableModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ConfirmDialogModule,
        CalendarModule,
        TabViewModule,
        ToggleButtonModule
    ],
    exports: [
        ButtonModule,
        FieldsetModule,
        InputMaskModule,
        MessagesModule,
        MessageModule,
        CheckboxModule,
        TableModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ConfirmDialogModule,
        CalendarModule,
        TabViewModule,
        ToggleButtonModule
    ]
})
export class PrimeNGModule { }
