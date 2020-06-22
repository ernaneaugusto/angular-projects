import { URL } from '../../../core/urls';
import { take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoriesModel } from '../../../shared/models/categories.model';
import { CategoriesService } from '../../../services/categories/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-main-categories-delete',
    templateUrl: './main-categories-delete.component.html',
    styleUrls: ['./main-categories-delete.component.scss']
})
export class MainCategoriesDeleteComponent implements OnInit, OnDestroy {

    // variaveis para desinscrever do subscribe
    private activatedRouteObs$: Subscription;
    private getCategoriesByIdObs$: Subscription;
    private setCategoryByIdObs$: Subscription;

    public isAlwaysReadonly: boolean = true;
    public hasCategoryError: boolean = false;
    public hasCategorySuccess: boolean = false;

    // dados para validacao do form de edicao de categoria
    public formCategoriesDelete: FormGroup = new FormGroup({
        id: new FormControl(''),
        category: new FormControl(
            '',
            [Validators.required, Validators.minLength(2)]
        ),
        description: new FormControl(
            ''
        ),
    });

    // injeta os servicos CategoriesService e ActivatedRoute ao componente para que seja possivel utiliza-los no componente
    constructor(
        private service: CategoriesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        // pega o id da rota da aplicacao para usar na consulta dos dados para edicao
        this.activatedRouteObs$ = this.activatedRoute.params.subscribe(paramId => {
            const categoryId = parseInt(paramId.id);
            // busca a categoria especifica da API
            this.getCategoryByIdApi(categoryId);
        });
    }

    ngOnDestroy(): void {
        // garante que os Observables serao encerrados ao destruir o componente
        if (this.activatedRouteObs$ ||
            this.getCategoriesByIdObs$ ||
            this.setCategoryByIdObs$
        ) {
            this.activatedRouteObs$.unsubscribe();
            this.getCategoriesByIdObs$.unsubscribe();
            this.setCategoryByIdObs$ === undefined ? null : this.setCategoryByIdObs$.unsubscribe();
        }
    }

    // valida e submete o form de delete para o 'banco de dados'
    public submitFormCategoriesDelete() {
        this.deleteCategoryByIdApi(this.formCategoriesDelete);
    }

    // confirma antes de executar a funcao de deletar categoria
    public confirmDelete(): void {
        const confirmDelete = confirm("Quer realmente deletar esta categoria?");
        if (confirmDelete) {
            this.submitFormCategoriesDelete();
        } else {
            return;
        }
    }

    // busca os dados atuais da categoria
    private getCategoryByIdApi(id: number): void {
        this.getCategoriesByIdObs$ = this.service
            .getCategoriesById(id)
            .pipe(
                take(1)
            )
            .subscribe((category: CategoriesModel) => {
                this.formCategoriesDelete.setValue({
                    id: category.id,
                    category: category.category,
                    description: category.description
                });
            }, (error: HttpErrorResponse) => {
                console.log("## error", error);
                this.hasCategoryError = true;
            });
    }

    // deleta a categoria
    private deleteCategoryByIdApi(formData: FormGroup): void {
        console.log("#form", formData.value.id);

        this.setCategoryByIdObs$ = this.service
            .deleteCategories(formData.value.id)
            .pipe(
                take(1)
            )
            .subscribe((category: CategoriesModel) => {
                console.log("## Dados atualizados!", category);
                this.router.navigate([URL.categories]);
            }, (error: HttpErrorResponse) => {
                console.log("## error", error);
                this.hasCategoryError = true;
            });
    }

}