import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup' // configuracao de rota secundaria, em app.component.html esta o router-outlet com name='popup'
      }
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
