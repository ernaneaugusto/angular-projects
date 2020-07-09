import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/components/button/button';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';

import { MessagesModule } from 'primeng/components/messages/messages';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { TableModule } from 'primeng/components/table/table';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        FieldsetModule,
        InputMaskModule,
        MessagesModule,
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
