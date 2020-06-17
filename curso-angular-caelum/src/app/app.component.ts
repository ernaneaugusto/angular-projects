import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private _isNewEmailFormOpen = false;
	public emailList = [];
	public email = {
		destinatario: '',
		assunto: '',
		conteudo: ''
	}

	get isNewEmailFormOpen() {
		return this._isNewEmailFormOpen;
	}

	public toggleNewEmailForm() {
		this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
	}

	public handleNewEmail(formEmail: NgForm) {

		console.log("## formEmail", formEmail);
		if(formEmail.invalid) return;
		
		this.emailList.push(this.email);

		this.email = {
			destinatario: '',
			assunto: '',
			conteudo: ''
		}
	}

}
