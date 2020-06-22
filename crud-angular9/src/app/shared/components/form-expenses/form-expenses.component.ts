import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Utils } from './../../utils';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
import { ExpensesModel } from '../../models/expenses.model';
import { Subscription } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';

@Component({
	selector: 'app-form-expenses',
	templateUrl: './form-expenses.component.html',
	styleUrls: ['./form-expenses.component.scss']
})
export class FormExpensesComponent implements OnInit {

	@Input() isModal: boolean = false;

	private categoriesModel: Array<CategoriesModel>;
	private getCategoriesObs$: Subscription;
	private setExpensesObs$: Subscription;

	public formExpenses: FormGroup = new FormGroup({
		amount: new FormControl(
			'',
			[Validators.required]
		),
		description: new FormControl(
			'',
			[Validators.required, Validators.minLength(2)]
		),
		purchaseDate: new FormControl(
			'',
			[Validators.required]
		),
		category: new FormControl(
			'',
			[Validators.required]
		),
		tag: new FormControl(
			''
		)
	})

	constructor(
		private serviceExpenses: ExpensesService,
		private serviceCategories: CategoriesService,
	) { }

	ngOnInit(): void {
		this.getCategoriesApi();
	}

	ngOnDestry(): void {
		if (
			this.getCategoriesObs$ ||
			this.setExpensesObs$ !== undefined
		) {
			this.getCategoriesObs$.unsubscribe();
		}
	}

	get categories(): Array<CategoriesModel> {
		return this.categoriesModel;
	}

	private setExpensesApi(): void {
		const data = new ExpensesModel(this.formExpenses.value);
		this.setExpensesObs$ = this.serviceExpenses
			.setExpenses(data)
			.subscribe(() => {
				console.log("## formData", data);
			}, (error: HttpErrorResponse) => {
				console.log("## error", error);
			});
	}

	private getCategoriesApi(): void {
		this.getCategoriesObs$ = this.serviceCategories
			.getCategories()
			.pipe(
				take(1)
			)
			.subscribe((categories: Array<CategoriesModel>) => {
				// cria um array de models do tipo CategoriesModel
				const arrayCategories: Array<CategoriesModel> = Utils.createModel(categories, 'categories');

				// ordena um array de objetos do tipo CategoriesModel
				this.categoriesModel = Utils.sortArrayObjects(arrayCategories, 'category');
			})
	}

	public submitFormExpenses() {
		if (this.formExpenses.valid) {
			console.log("## Valido", this.formExpenses.value);
			this.setExpensesApi();
			return;
		} else {
			Utils.markFormFieldsAsTouched(this.formExpenses);
			console.log("## INVALIDO");
		}
	}

}
