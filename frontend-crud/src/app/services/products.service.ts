import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ProductModel } from './../components/products/product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, EMPTY } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	private baseUrl: string = 'http://localhost:3001'

	constructor(
		private http: HttpClient,
		private snackBar: MatSnackBar
	) { }

	public showMessage(msg: string, isError = false): void {
		this.snackBar.open(msg, 'x', {
			duration: 2000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: isError ? ['alert-danger'] : ['alert-success']
		})
	}

	public create(product: ProductModel): Observable<ProductModel> {
		return this.http.post<ProductModel>(`${this.baseUrl}/products`, product)
			.pipe(
				map(error => error),
				catchError(e => this.handleError(e))
			);
	}

	public getProducts(): Observable<ProductModel[]> {
		return this.http.get<ProductModel[]>(`${this.baseUrl}/products`)
			.pipe(
				map(error => error),
				catchError(e => this.handleError(e))
			);
	}

	public getProductsById(id: string): Observable<ProductModel> {
		return this.http.get<ProductModel>(`${this.baseUrl}/products/${id}`)
			.pipe(
				map(error => error),
				catchError(e => this.handleError(e))
			);
	}

	public update(product: ProductModel): Observable<ProductModel> {
		return this.http.put<ProductModel>(`${this.baseUrl}/products/${product.id}`, product)
			.pipe(
				map(error => error),
				catchError(e => this.handleError(e))
			);
	}

	public delete(id: string): Observable<ProductModel> {
		return this.http.delete<ProductModel>(`${this.baseUrl}/products/${id}`)
			.pipe(
				map(error => error),
				catchError(e => this.handleError(e))
			);
	}

	private handleError(error): Observable<any> {
		// verifica se json-server esta sendo executado
		if (error.statusText == 'Unknown Error' && error.status == 0) {
			alert('JSON Server não está sendo executado! \nVerifique mais informações em README.md');
		}

		this.showMessage(`Erro ao realizar operação!`, true);
		return EMPTY;
	}
}
