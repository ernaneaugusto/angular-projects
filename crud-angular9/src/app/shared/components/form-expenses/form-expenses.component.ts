import { Utils } from './../../utils';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-form-expenses',
	templateUrl: './form-expenses.component.html',
	styleUrls: ['./form-expenses.component.scss']
})
export class FormExpensesComponent implements OnInit {

	@Input() isModal: boolean = false;

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
		category: new FormControl(
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
