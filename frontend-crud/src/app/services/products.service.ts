import { HttpClient } from '@angular/common/http';

import { ProductModel } from './../components/products/product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	private baseUrl: string = 'http://localhost:3001'

	constructor(
		private http: HttpClient,
		private snackBar: MatSnackBar
	) { }

	public showMessage(msg: string): void {
		this.snackBar.open(msg, 'x', {
			duration: 2000,
			horizontalPosition: 'right',
			verticalPosition: 'top'
		})
	}

	public create(product: ProductModel): Observable<ProductModel> {
		return this.http.post<ProductModel>(`${this.baseUrl}/products`, product);
	}

	public getProducts(): Observable<ProductModel[]> {
		return this.http.get<ProductModel[]>(`${this.baseUrl}/products`);
	}
	
	public getProductsById(id: string): Observable<ProductModel> {
		return this.http.get<ProductModel>(`${this.baseUrl}/products/${id}`);
	}
	
	public update(product: ProductModel): Observable<ProductModel> {
		return this.http.put<ProductModel>(`${this.baseUrl}/products/${product.id}`, product);
	}
	
	public delete(id: string): Observable<ProductModel> {
		return this.http.delete<ProductModel>(`${this.baseUrl}/products/${id}`);
	}
}
