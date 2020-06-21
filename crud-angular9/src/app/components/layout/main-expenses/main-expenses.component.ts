import { Utils } from './../../../shared/utils';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-expenses',
	templateUrl: './main-expenses.component.html',
	styleUrls: ['./main-expenses.component.scss']
})
export class MainExpensesComponent implements OnInit {

	public formExpenses: FormGroup = new FormGroup({
		amount: new FormControl(
			'',
			[Validators.required]
		),
		description: new FormControl(
			'',
			[Validators.required, Validators.minLength(2)]
		),
		purchaseDate: new FormControl(
			'',
			[Validators.required]
		),
		categorie: new FormControl(
			'',
			[Validators.required]
		),
		tag: new FormControl(
			''
		)
	})

	constructor() { }

	ngOnInit(): void { }

	public submitFormExpenses() {
		if (this.formExpenses.valid) {
			console.log("## Valido", this.formExpenses.controls);
		} else {
			Utils.markFormFieldsAsTouched(this.formExpenses);
			console.log("## INVALIDO");
		}
	}
}
