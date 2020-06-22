import { URL } from './../../../core/urls';
import { NavigationService } from './../../services/navigation/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { ExpensesModel } from './../../models/expenses.model';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Utils } from './../../utils';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
import { Subscription } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';

@Component({
	selector: 'app-form-expenses',
	templateUrl: './form-expenses.component.html',
	styleUrls: ['./form-expenses.component.scss']
})
export class FormExpensesComponent implements OnInit {

	@Input() isModal: boolean = false;
	@Input() isFormEdit: boolean;

	private categoriesModel: Array<CategoriesModel>;
	private expensesModel: ExpensesModel;

	private getCategoriesObs$: Subscription;
	private getExpensesObs$: Subscription;
	private setExpensesObs$: Subscription;
	private activatedRouteObs$: Subscription;

	// propriedade que sera emitida quando um novo expense for cadastrado
	@Output() newExpenseEmitter: EventEmitter<any> = new EventEmitter();
	
	public idExpense: number;
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
	});

	constructor(
		private serviceExpenses: ExpensesService,
		private serviceCategories: CategoriesService,
		private activatedRoute: ActivatedRoute,
		private navigation: NavigationService,
	) { }

	ngOnInit(): void {
		if (this.isFormEdit) {
			// pega o id da rota da aplicacao para usar na consulta dos dados para edicao
			this.activatedRouteObs$ = this.activatedRoute.params.subscribe(paramId => {
				const idExpense = parseInt(paramId.id)
				this.getExpensesByIdApi(idExpense);
			});
		}
		this.getCategoriesApi();
	}

	ngOnDestroy(): void {
		if (this.getCategoriesObs$) this.getCategoriesObs$.unsubscribe();
		if (this.activatedRouteObs$) this.activatedRouteObs$.unsubscribe();
		if (this.setExpensesObs$ !== undefined) this.setExpensesObs$.unsubscribe();
		if (this.getExpensesObs$ !== undefined) this.getExpensesObs$.unsubscribe();
	}

	get categories(): Array<CategoriesModel> {
		return this.categoriesModel;
	}

	// funcao que emitira um evento quando novo expense for cadastrado
	public setExpenseEmitter(newExpense: ExpensesModel) {
		this.newExpenseEmitter.emit(newExpense);
	}

	private setExpensesApi(): void {
		const data = new ExpensesModel(this.formExpenses.value);
		this.setExpensesObs$ = this.serviceExpenses
			.setExpenses(data)
			.subscribe(() => {
				// emite o novo expense cadastrado
				this.setExpenseEmitter(data);
				console.log("## Dados cadastrados com sucesso!", data);
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
			}, (error: HttpErrorResponse) => console.log("## error", error));
	}

	private getExpensesByIdApi(id: number): void {
		this.getExpensesObs$ = this.serviceExpenses
			.getExpensesById(id)
			.pipe(
				take(1)
			)
			.subscribe((expense: ExpensesModel) => {
				this.idExpense = parseInt(expense.id);
				this.formExpenses.setValue({
                    amount: expense.amount,
                    description: expense.description,
                    purchaseDate: expense.purchaseDate,
                    category: expense.category,
                    tag: expense.tag,
				});

				this.expensesModel = new ExpensesModel(expense);
				console.log("this.expensesModel", this.expensesModel);

			}, (error: HttpErrorResponse) => console.log("## error", error));
	}

	public submitFormExpenses() {
		if (this.formExpenses.valid) {
			console.log("## Valido", this.formExpenses.value);
			this.setExpensesApi();
			if(this.isFormEdit) this.navigation.navigateToUrl(`/${URL.expenses}`);
		} else {
			Utils.markFormFieldsAsTouched(this.formExpenses);
			console.log("## INVALIDO");
		}
	}

}
