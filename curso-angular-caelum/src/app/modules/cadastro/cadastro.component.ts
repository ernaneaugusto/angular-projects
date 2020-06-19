import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
	public formCadastro = new FormGroup({
		nome: new FormControl('', [
			Validators.required,
			Validators.minLength(2)
		]),
		email: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		senha: new FormControl('', [
			Validators.required,
			Validators.pattern('^.(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&?	"]).*$')
		]),
		avatar: new FormControl(''),
		telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')])
	});

	public handleCadastrarUsuario() {
		if (this.formCadastro.valid) {
			console.log("##", this.formCadastro.value);
		} else {
			console.log('Campos precisam ser preenchidos!');
			this.validarTodosOsCamposDoFormulario(this.formCadastro);
		}
	}

	public validarTodosOsCamposDoFormulario(form: FormGroup) {
		Object.keys(form.controls).forEach(field => {
			const control = form.get(field);
			control.markAsTouched({ onlySelf: true });
		})
	}
}
