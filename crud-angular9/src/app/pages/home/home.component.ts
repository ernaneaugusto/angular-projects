import { CategoriesService } from './../../services/categories/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	private categoriesObs$: Subscription;
	private expensesObs$: Subscription;

	public categoriesAmount: number;
	public expensesAmount: number;

	constructor(
		private categoriesService: CategoriesService,
		private expensesService: ExpensesService,
	) { }

	ngOnInit(): void {
		this.getCategoriesApi();
		this.getExpensesApi();
	}

	ngOnDestroy(): void {
		if (this.categoriesObs$) this.categoriesObs$.unsubscribe();
		if (this.expensesObs$) this.expensesObs$.unsubscribe();
	}

	private getCategoriesApi() {
		this.categoriesObs$ = this.categoriesService
			.getCategories()
			.subscribe(categories => this.categoriesAmount = categories.length);
	}

	private getExpensesApi() {
		this.expensesObs$ = this.categoriesObs$ = this.expensesService
			.getExpenses()
			.subscribe(expenses => this.expensesAmount = expenses.length);
	}

}
