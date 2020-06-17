import { Component } from '@angular/core';

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

	public handleNewEmail(event: Event) {
		event.preventDefault();

		this.emailList.push(this.email);

		this.email = {
			destinatario: '',
			assunto: '',
			conteudo: ''
		}
	}

}
