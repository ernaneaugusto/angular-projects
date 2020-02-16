import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ProductResolved } from './product';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {
    constructor(
        private productService: ProductService
    ) { }

    resolve(
        routeSnapshot: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ProductResolved> {
        const id = parseInt(routeSnapshot.paramMap.get('id'));

        if (isNaN(id)) {
            const message = `O id do produto não é um número: ${id}`;
            console.error(message);
            return of({ product: null, error: message });
        }

        return this.productService
            .getProduct(id)
            .pipe(
                map(product => ({ product: product })),
                catchError(error => {
                    const message = `Error: ${error}`
                    console.error(message);
                    return of({ product: null, error: message })

                })
            );
    }

}