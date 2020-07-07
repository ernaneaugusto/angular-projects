import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-amount-items',
  templateUrl: './card-amount-items.component.html',
  styleUrls: ['./card-amount-items.component.scss']
})
export class CardAmountItemsComponent implements OnInit {

  @Input() title: string;
  @Input() value: number;
  @Input() color: string = 'info';
  @Input() url: string;

  constructor() { }

  ngOnInit(): void { }

}
