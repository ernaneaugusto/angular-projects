import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public createProduct(): void {
    this.productsService.showMessage("Produto criado com sucesso!")
  }

  public cancel(): void {
    this.router.navigate(['/products'])
  }

}
