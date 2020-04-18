import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(private snackBar: MatSnackBar) { }

	public showMessage(msg: string): void {
		this.snackBar.open(msg, 'x', {
			duration: 1500,
			horizontalPosition: 'right',
			verticalPosition: 'top'
		})
	}
}
