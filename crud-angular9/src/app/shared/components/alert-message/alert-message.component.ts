import { Component, OnInit, Input } from '@angular/core';

interface AlertMessage {
  message: string;
  color: string;
}

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  @Input() data: AlertMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
