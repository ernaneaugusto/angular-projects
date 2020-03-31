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
    ): Observable<ProductResolved> { // <ProductResolved>: tipo do dado de retorno
        const id = parseInt(routeSnapshot.paramMap.get('id'));

        // define uma mensagem de erro caso parametro ID obtido na por query string da rota nao seja um numero
        if (isNaN(id)) {
            const message = `O id do produto não é um número: ${id}`;
            console.error(message);
            // Aqui podemos ter os seguintes retornos:
            // FALSE: cancela a navegacao para rota com resolver, deixando o usuario na rota que esta atualmente. Nao eh possivel enviar infos do motivo do erro
            // Navegar para uma página de erro padrao
            // Retornar um produto NULO, como exemplo abaixo, e deixar que o componente que o chamou faça o tratamento de erro conforme necessario. Ex: Mostrar uma msg de "Nenhum produto encontrado"
            return of({ product: null, error: message }); // of: transforma o retorno em um observable
        }

        return this.productService
            .getProduct(id)
            .pipe(
                map(product => ({ product: product })),
                catchError(error => {
                    const message = `Error: ${error}`
                    console.error(message);
                    return of({ product: null, error: message });
                })
            );
    }

}