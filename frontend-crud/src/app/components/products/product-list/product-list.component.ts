import { ProductModel } from './../product.model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];
    public displayedColumns: Array<string> = ['id', 'name', 'price', 'action'];

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.getProductsList();
    }

    public getProductsList(): void {
        this.productsService
            .getProducts()
            .subscribe((products: ProductModel[]) => {
                this.products = products;
            }, (error: HttpErrorResponse) => {
                console.log('ERROR', error.message);
            })
    }

}
