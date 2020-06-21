import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utils } from 'src/app/shared/utils';

@Component({
	selector: 'app-main-categories',
	templateUrl: './main-categories.component.html',
	styleUrls: ['./main-categories.component.scss']
})
export class MainCategoriesComponent implements OnInit {

	public formCategories: FormGroup = new FormGroup({
		categorie: new FormControl(
			'',
			[Validators.required, Validators.minLength(2)]
		),
		description: new FormControl(
			'',
			[Validators.required, Validators.minLength(2)]
		),
	});

	constructor() { }

	ngOnInit(): void { }

	public submitFormCategories(): void {
		if (this.formCategories.valid) {
			console.log("## Valido", this.formCategories.controls);
		} else {
			console.log("## Form invalido");
			Utils.markFormFieldsAsTouched(this.formCategories);
		}
	}



}
