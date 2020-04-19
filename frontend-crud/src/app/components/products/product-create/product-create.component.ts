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

	public product: ProductModel = {
		name: '',
		price: null
	}

	constructor(
		private productsService: ProductsService,
		private router: Router
	) { }

	ngOnInit(): void { }

	public createProduct(): void {
		if (this.product.name && this.product.price) {
			this.productsService
				.create(this.product)
				.subscribe((res: ProductModel) => {
					this.productsService.showMessage(`"${res.name}" criado com sucesso!`);
					this.router.navigate(['/products']);
				},
					(error: HttpErrorResponse) => {
						console.log("Erro:", error.message);
					})
		} else {
			this.productsService.showMessage(`Preencha todos os campos do formulário!`);
			return;
		}
	}

	public cancel(): void {
		this.router.navigate(['/products'])
	}

}
