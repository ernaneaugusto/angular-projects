import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesModel } from 'src/app/shared/models/categories.model';
import { take } from 'rxjs/operators';
import { URL } from './../../core/urls';
import { HttpErrorResponse } from '@angular/common/http';
import { BreadcrumbService } from 'src/app/shared/components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-categories-delete',
  templateUrl: './categories-delete.component.html',
  styleUrls: ['./categories-delete.component.scss']
})
export class CategoriesDeleteComponent implements OnInit, OnDestroy {

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
    private breadcrumbService: BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.updateBreadcrumbName('Categorias');
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

  // confirma antes de executar a funcao de deletar categoria
  public confirmDelete(): void {
    if (confirm("Quer realmente deletar esta categoria?")) this.deleteCategoryByIdApi(this.formCategoriesDelete);
    else return;
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
    this.setCategoryByIdObs$ = this.service
      .deleteCategories(formData.value.id)
      .pipe(
        take(1)
      )
      .subscribe((category: CategoriesModel) => {
        console.log("## Dados deletados!", category);
        this.router.navigate([URL.categories]);
      }, (error: HttpErrorResponse) => {
        console.log("## error", error);
        this.hasCategoryError = true;
      });
  }

}