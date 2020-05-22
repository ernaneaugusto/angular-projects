import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../messages/message.service';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit';
  errorMessage: string;

  private dataIsValid: { [key: string]: boolean } = {};

  private currentProduct: Product;
  private originalProduct: Product;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  get product(): Product {
    return this.currentProduct;
  }
  set product(value: Product) {
    this.currentProduct = value;
    this.originalProduct = { ...value };
  }

  get isDirty(): boolean {
    return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
  }

  ngOnInit() {
    // Com this.route.snapshot.paramMap sem o susbcribe o componente eh atualizado apenas 1 vez, com isso, caso algum parametro da rota seja mudado, como o ID do produto, o componente nao eh atualizado com as novas informacoes desse produto, para que essa atualizacao ocorra deve-se utilizar o subscribe

    // sem o subscribe
    // const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.getProduct(id);

    // com subscribe
    // this.activatedRoute.paramMap.subscribe(
    //   params => {
    //     const id = parseInt(params.get('id'));
    //     this.getProduct(id);
    //   }
    // );

    // com resolver
    // const resolvedData = this.activatedRoute.snapshot.data['resolvedData'];
    // this.errorMessage = resolvedData.error;
    // this.onProductRetrieved(resolvedData.product);

    // com resolver e subscribe garantimos que tanto a pagina de edicao quanto a de adicao de produtos funcionem corretamente, como elas usam o msm componente e a unica coisa que muda na rota eh o ID do produto o ngOnInit nao eh executado novamente, por isso precisamos do subscribe
    this.activatedRoute.data.subscribe(dados => {
      const resolvedData = dados['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onProductRetrieved(resolvedData.product);
    })
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (!this.product) {
      this.pageTitle = 'No product found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    }
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.productName} was deleted`);
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id).subscribe({
          next: () => this.onSaveComplete(`${this.product.productName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  saveProduct(): void {
    if (true === true) {
      if (this.product.id === 0) {
        this.productService.createProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The new ${this.product.productName} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.productService.updateProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.product.productName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
  public resetProduct() {
    this.dataIsValid = null;
    this.currentProduct = null;
    this.originalProduct = null;
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.resetProduct(); // reseta as propriedades para que ao sair da página de edição não seja exibida a mensagem de confirmação de edição de produto mesmo ao alterar e salvar os dados do produto

    // Navigate back to the product list
    this.route.navigateByUrl('/products');
  }

  isValid(path?: string): boolean {
    this.validate();
    if(path) return this.dataIsValid[path];

    return (this.dataIsValid && Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }
  
  validate(): void {
    this.dataIsValid = {};

    // Tab: info
    if(this.product.productCode && this.product.productName.length >= 3) {
      this.dataIsValid['info'] = true;
    } else {
      this.dataIsValid['info'] = false;
    }

    // Tab: tags
    if(this.product.category && this.product.category.length >= 3) {
      this.dataIsValid['tags'] = true;
    } else {
      this.dataIsValid['tags'] = false;
    }
  }
}
