import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CategoriesModel } from 'src/app/shared/models/categories.model';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { URL } from './../../core/urls';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit, OnDestroy {

  // variaveis para desinscrever do subscribe
  private activatedRouteObs$: Subscription;
  private getCategoriesByIdObs$: Subscription;
  private setCategoryByIdObs$: Subscription;
  
  private categoryId: number;

  public hasCategoryError: boolean = false;
  public hasCategorySuccess: boolean = false;
  // dados para validacao do form de edicao de categoria
  public formCategoriesEdit: FormGroup = new FormGroup({
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
      this.activatedRouteObs$ = this.activatedRoute.params.subscribe(id => {
          this.categoryId = this.activatedRoute.snapshot.params['id'];
      });
      
      // busca a categoria especifica da API
      this.getCategoryByIdApi(this.categoryId);
  }

  ngOnDestroy(): void {
      // garante que os Observables serao encerrados ao destruir o componente
      if (this.activatedRouteObs$ ||
          this.getCategoriesByIdObs$ ||
          this.setCategoryByIdObs$
      ) {
          this.activatedRouteObs$.unsubscribe();
          this.getCategoriesByIdObs$.unsubscribe();
          this.setCategoryByIdObs$ === undefined ? null  : this.setCategoryByIdObs$.unsubscribe();
      }
  }

  // valida e submete os dados do form de edicao para o 'banco de dados'
  public submitFormCategoriesEdit() {
      this.setCategoryByIdApi(this.formCategoriesEdit);
  }

  // busca os dados atuais da categoria
  private getCategoryByIdApi(id: number): void {
      this.getCategoriesByIdObs$ = this.service
          .getCategoriesById(id)
          .pipe(
              take(1)
          )
          .subscribe((category: CategoriesModel) => {
              this.formCategoriesEdit.setValue({
                  id: category.id,
                  category: category.category,
                  description: category.description
              });
          }, (error: HttpErrorResponse) => {
              this.hasCategoryError = true;
          });
  }

  // atualiza os dados da categoria
  private setCategoryByIdApi(formData: FormGroup): void {
      this.setCategoryByIdObs$ = this.service
          .setCategoriesById(formData)
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
