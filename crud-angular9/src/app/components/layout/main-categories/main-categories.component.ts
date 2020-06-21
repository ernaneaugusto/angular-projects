import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CategoriesModel } from './../../../shared/models/categories.model';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Utils } from 'src/app/shared/utils';

@Component({
	selector: 'app-main-categories',
	templateUrl: './main-categories.component.html',
	styleUrls: ['./main-categories.component.scss']
})
export class MainCategoriesComponent implements OnInit, OnDestroy {

	private categoriesModel: Array<CategoriesModel>;
	private categoriesObs$: Subscription;
	private categoriesTableUpdated: EventEmitter<any> = new EventEmitter<any>();

	public hasCategoriesError: boolean = false;
	public categoriesAmount: number;
	// dados para validacao do form de categorias
	public formCategories: FormGroup = new FormGroup({
		category: new FormControl(
			'',
			[Validators.required, Validators.minLength(2)]
		),
		description: new FormControl(
			''
		),
	});

	// injeta o servico CategoriesService ao componente para que seja possivel utilizar seus metodos para fazer requisicoes para API
	constructor(private service: CategoriesService) { }

	ngOnInit(): void {
		// busca os dados de categorias da API
		this.getCategoriesApi();
	}

	ngOnDestroy(): void {
		if (this.categoriesObs$) {
			// garante que o Observable sera encerrado ao destruir o componente
			this.categoriesObs$.unsubscribe();
		}
	}

	// atualiza o total e listagem de categorias com ordenacao
	private updateCategoriesEmit() {
		this.categoriesAmount++;
		this.categoriesModel = Utils.sortArrayObjects(this.categories, 'category');
		this.categoriesTableUpdated.emit([this.categories, this.categoriesAmount]);
	}

	// retorna a variavel private de categoriesModel para que ela nao seja acessivel fora da classe
	get categories() {
		return this.categoriesModel;
	}

	// valida e submete os dados do form para cadastro no 'banco de dados'
	public submitFormCategories(): void {
		if (this.formCategories.valid) {
			const data = new CategoriesModel(this.formCategories.value);
			this.setCategoriesApi(data);
		} else {
			console.log("## Form invalido");
			Utils.markFormFieldsAsTouched(this.formCategories);
		}
	}

	// retorna os dados da APi /categories ordenados
	private getCategoriesApi(): void {
		this.categoriesObs$ = this.service
			.getCategories()
			.pipe(
				take(1) // aguarda o retorno de da API apenas 1x e encerra o Observable
			)
			.subscribe((category: Array<CategoriesModel>) => {
				this.categoriesAmount = category.length;

				// cria um array de models do tipo CategoriesModel
				const arrayCategories = Utils.createModel(category, 'categories');

				// ordena um array de objetos do tipo CategoriesModel
				this.categoriesModel = Utils.sortArrayObjects(arrayCategories, 'category');
			},
				(error: HttpErrorResponse) => {
					console.log("### erro", error);
					this.hasCategoriesError = true;
				});
	}

	private setCategoriesApi(formData): void {
		this.service
			.setCategories(formData)
			.pipe(
				take(1) // aguarda o retorno de da API apenas 1x e encerra o Observable
			)
			.subscribe((cat) => {
				console.log("### Dados cadastrados com sucesso!", cat);
				this.categories.push(cat);
				this.updateCategoriesEmit();
			},
				(error) => {
					console.log("### erro", error);
				});
	}

}
