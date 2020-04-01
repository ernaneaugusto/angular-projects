import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm, { static: false }) productForm: NgForm;

  errorMessage: string;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.data
      .subscribe(productData => {
        // Limpa a validacao do form aoo entrar na pagina de adição de produtos, como a pagina de edição utiliza o mesmo componente eh necessario realizar essa validacao para que se caso estivermos editando e o form ficar invalido, ao clicar em Add Product no menu essa validacao de campos nao permaneca
        if(this.productForm) {
          this.productForm.reset();
        }
        this.product = productData['resolvedData'].product;
      })
  }
}
