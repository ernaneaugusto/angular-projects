import { ExpensesModel } from './../../shared/models/expenses.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table-expenses',
    templateUrl: './table-expenses.component.html',
    styleUrls: ['./table-expenses.component.scss']
})
export class TableExpensesComponent implements OnInit {

    @Input() data: Array<ExpensesModel>;

    constructor() { }

    ngOnInit(): void { }

}
