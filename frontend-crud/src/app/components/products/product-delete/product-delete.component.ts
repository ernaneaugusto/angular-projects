import { ProductModel } from './../product.model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-product-delete',
    templateUrl: './product-delete.component.html',
    styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

    public product: ProductModel = {
        name: '',
        price: null
    }

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
    ) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getProductById(id);
    }

    public getProductById(id: string): void {
        this.productsService
            .getProductsById(id)
            .subscribe((product: ProductModel) => {
                this.product = product;
            }, (error: HttpErrorResponse) => {
                console.log("ERRO", error.message);
            })
    }

    public deleteProduct(): void {
        const id = `${this.product.id}`;
        this.productsService
            .delete(id)
            .subscribe((product: ProductModel) => {
                this.productsService.showMessage(`"${this.product.name}" excluído com sucesso!`);
                this.router.navigate(['/products']);
            }, (error: HttpErrorResponse) => {
                console.log("ERRO", error.message);
            })
    }

    public cancel(): void {
        this.router.navigate(['/products']);
    }

}
