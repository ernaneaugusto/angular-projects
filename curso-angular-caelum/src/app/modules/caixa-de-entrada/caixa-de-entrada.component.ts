import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})

export class CaixaDeEntradaComponent {
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
    if (formEmail.invalid) return;

    this.emailList.push(this.email);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

    formEmail.reset();
  }

}
