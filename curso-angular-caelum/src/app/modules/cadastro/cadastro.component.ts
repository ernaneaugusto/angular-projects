import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
	public formCadastro = new FormGroup({
		nome: new FormControl(''),
		email: new FormControl(''),
		senha: new FormControl(''),
		avatar: new FormControl(''),
	});

	public handleCadastrarUsuario() {
		if (this.formCadastro.valid) {
			console.log("##", this.formCadastro.value);
		} else {
			console.log('Campos precisam ser preenchidos!')
		}
	}
}
