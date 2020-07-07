import { URL } from './../../core/urls';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Utils } from './../../shared/utils';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
import { Subscription } from 'rxjs';
import { CategoriesModel } from 'src/app/shared/models/categories.model';
import { ExpensesModel } from 'src/app/shared/models/expenses.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';

@Component({
	selector: 'app-form-expenses',
	templateUrl: './form-expenses.component.html',
	styleUrls: ['./form-expenses.component.scss']
})
export class FormExpensesComponent implements OnInit {

	@Input() isModal: boolean = false;
	@Input() isFormEdit: boolean = false;
	@Input() isFormDelete: boolean = false;

	private categoriesModel: Array<CategoriesModel>;
	private expensesModel: ExpensesModel;

	private getCategoriesObs$: Subscription;
	private getExpensesObs$: Subscription;
	private setExpensesObs$: Subscription;
	private deleteExpenseObs$: Subscription;
	private updateExpensesObs$: Subscription;
	private activatedRouteObs$: Subscription;

	// propriedade que sera emitida quando um novo expense for cadastrado
	@Output() newExpenseEmitter: EventEmitter<any> = new EventEmitter();

	public idExpense: number; // passado 
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
		if (this.isFormEdit || this.isFormDelete) {
			// pega o id da rota da aplicacao para usar na consulta dos dados para edicao
			this.activatedRouteObs$ = this.activatedRoute.params.subscribe(paramId => {
				this.idExpense = paramId.id;
				this.getExpensesByIdApi(this.idExpense);
			});
		}
		this.getCategoriesApi();
	}

	ngOnDestroy(): void {
		if (this.getCategoriesObs$) this.getCategoriesObs$.unsubscribe();
		if (this.activatedRouteObs$) this.activatedRouteObs$.unsubscribe();
		if (this.setExpensesObs$ !== undefined) this.setExpensesObs$.unsubscribe();
		if (this.getExpensesObs$ !== undefined) this.getExpensesObs$.unsubscribe();
		if (this.deleteExpenseObs$ !== undefined) this.deleteExpenseObs$.unsubscribe();
		if (this.updateExpensesObs$ !== undefined) this.updateExpensesObs$.unsubscribe();
	}

	get categories(): Array<CategoriesModel> {
		return this.categoriesModel;
	}

	// funcao que emitira um evento quando novo expense for cadastrado
	public setExpenseEmitter(newExpense: ExpensesModel) {
		this.newExpenseEmitter.emit(newExpense);
	}

	public submitFormExpense() {
		if (this.formExpenses.valid) {
			console.log("## Valido", this.formExpenses.value);
			this.setExpensesApi();
		} else {
			Utils.markFormFieldsAsTouched(this.formExpenses);
			console.log("## INVALIDO");
		}
	}

	public submitFormExpenseUpdate() {
		if (this.formExpenses.valid) {
			this.updateExpenseApi();
		} else {
			Utils.markFormFieldsAsTouched(this.formExpenses);
			console.log("## INVALIDO");
		}
	}

	public submitFormExpenseDelete() {
		if (confirm("Quer realmente deletar este gasto?")) this.deleteExpenseApi();
		else return;
	}

	private setExpensesApi(): void {
		const formData = new ExpensesModel(this.formExpenses.value);

		this.setExpensesObs$ = this.serviceExpenses
			.setExpenses(formData)
			.pipe(
				take(1)
			)
			.subscribe(() => {
				// emite o novo expense cadastrado
				this.setExpenseEmitter(formData);
				this.formExpenses.reset();
				console.log("## Dados cadastrados com sucesso!", formData);
			}, (error: HttpErrorResponse) => {
				console.log("## error", error);
			});
	}

	private updateExpenseApi(): void {
		const formData = new ExpensesModel(this.formExpenses.value);
		formData.id = this.idExpense.toString();

		this.updateExpensesObs$ = this.serviceExpenses
			.updateExpense(formData)
			.pipe(
				take(1)
			)
			.subscribe(() => {
				alert('Dados atualizados com sucesso!');
				console.log("## Dados atualizados com sucesso!", formData);
				this.navigation.navigateToUrl(`/${URL.expenses}`);
			}, (error: HttpErrorResponse) => {
				console.log("## error", error);
			});
	}



	private deleteExpenseApi() {
		this.deleteExpenseObs$ = this.serviceExpenses
			.deleteExpense(this.idExpense)
			.pipe(
				take(1)
			)
			.subscribe(() => {
				alert('Dados deletados com sucesso!');
				console.log("## Dado deletado com sucesso!\nID do gasto: ", this.idExpense);
				this.navigation.navigateToUrl(`/${URL.expenses}`);
			},
				(error: HttpErrorResponse) => {
					console.log("## error", error);
				}
			);
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
				const expenseItem = new ExpensesModel(expense);

				this.formExpenses.setValue({
					amount: expenseItem.amount,
					description: expenseItem.description,
					purchaseDate: expenseItem.purchaseDate,
					category: expenseItem.category,
					tag: expenseItem.tag,
				});

				this.expensesModel = new ExpensesModel(expense);

			}, (error: HttpErrorResponse) => console.log("## error", error));
	}

}
