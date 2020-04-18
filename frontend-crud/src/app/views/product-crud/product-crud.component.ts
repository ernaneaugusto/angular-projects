import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-crud',
    templateUrl: './product-crud.component.html',
    styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void { }

    public navigateToProductCreate(): void {
        this.router.navigate(['/products/create']);
    }

}
