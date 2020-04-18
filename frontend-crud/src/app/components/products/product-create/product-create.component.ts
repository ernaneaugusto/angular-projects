import { ProductModel } from './../product.model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

	product: ProductModel = {
		name: 'Produto teste 1',
		price: 123.99
	}

	constructor(
		private productsService: ProductsService,
		private router: Router
	) { }

	ngOnInit(): void { }

	public createProduct(): void {
		this.productsService
			.create(this.product)
			.subscribe((res: ProductModel) => {
				this.productsService.showMessage(`"${res.name}" criado com sucesso!`);
			},
				(error: HttpErrorResponse) => {
					console.log("Erro:", error.message);
				})
	}

	public cancel(): void {
		this.router.navigate(['/products'])
	}

}
