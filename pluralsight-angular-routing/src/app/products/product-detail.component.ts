import { Component, OnInit } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const resolvedData: ProductResolved = this.activatedRoute.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      // @TODO: esconder mensagem de 'No product found' quando houver erro no resolver da rota para id de produto nao encontrado
      this.pageTitle = 'No product found';
    }
  }
}
