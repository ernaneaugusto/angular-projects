import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ExpensesModel } from 'src/app/shared/models/expenses.model';
import { Subscription } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
import { Utils } from 'src/app/shared/utils';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit, OnDestroy {

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

	// funcao que recebera o novo expense cadastrado pelo form-expenses
	// e atualizara os campos desse componentes dependentes desse cadastro
	public updateTableExpenses(eventNewExpense: ExpensesModel) {
		this.expensesAmount++;
		this.expensesModel.push(eventNewExpense);
		this.expensesModel = Utils.sortArrayObjects(this.expenses, 'amount');
	}

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
				this.expensesModel = Utils.sortArrayObjects(arrayExpenses, 'amount');
			});
	}

}
