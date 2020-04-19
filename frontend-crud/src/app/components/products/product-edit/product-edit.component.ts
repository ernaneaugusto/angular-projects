import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

    public product: ProductModel = {
        name: '',
        price: null
    }

    constructor(
        private productsService: ProductsService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getProductById(id);
    }

    public getProductById(id: string): void {
        this.productsService
            .getProductsById(id)
            .subscribe((product: ProductModel) => {
                this.product = product
            })
    }

    public editProduct(): void {
        this.productsService
            .update(this.product)
            .subscribe((product: ProductModel) => {
                this.productsService.showMessage(`"${product.name}" atualizado com sucesso!`);
                this.router.navigate(['/products']);
            },
                (error: HttpErrorResponse) => console.log("ERRO", error.message)
            );
    }

    public cancel(): void {
        this.router.navigate(['/products']);
    }

}
