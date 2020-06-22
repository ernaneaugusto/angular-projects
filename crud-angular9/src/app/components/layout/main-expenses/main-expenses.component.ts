import { ExpensesModel } from './../../../shared/models/expenses.model';
import { Utils } from './../../../shared/utils';
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';

@Component({
	selector: 'app-main-expenses',
	templateUrl: './main-expenses.component.html',
	styleUrls: ['./main-expenses.component.scss']
})
export class MainExpensesComponent implements OnInit, OnDestroy {

	private expensesModel: Array<ExpensesModel>;
	private expensesObs$: Subscription;

	public expensesAmount: number;
	private expensesTableUpdated: EventEmitter<any> = new EventEmitter<any>();


	constructor(private service: ExpensesService) { }

	ngOnInit(): void {
		this.getExpensesApi();
	}

	ngOnDestroy(): void {
		if (this.expensesObs$) {
			this.expensesObs$.unsubscribe();
		}
	}

	get expenses() {
		return this.expensesModel;
	}

	// private updateExpensesEmit() {
	// 	this.expensesAmount++;
	// 	this.expensesModel = Utils.sortArrayObjects(this.expenses, 'datePurchase');
	// 	this.expensesTableUpdated.emit([this.expenses, this.expensesAmount]);
	// }

	private getExpensesApi(): void {
		this.service
			.getExpenses()
			.pipe(
				take(1)
			)
			.subscribe((expenses: Array<ExpensesModel>) => {
				this.expensesModel = expenses;
				this.expensesAmount = expenses.length;

				// cria um array de models do tipo ExpensesModel
				const arrayExpenses: Array<ExpensesModel> = Utils.createModel(expenses, 'expenses');

				// ordena um array de objetos do tipo ExpensesModel
				this.expensesModel = Utils.sortArrayObjects(arrayExpenses, 'value');
			});
	}

}
