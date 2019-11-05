import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public dadosForm = [];

  public formDados: FormGroup = new FormGroup({
    'nome': new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    'idade': new FormControl(
      '',
      [
        Validators.required
      ]
    )
  });

  constructor() { }

  onCompleteForm() {

    if (this.formDados.invalid) {
      this.formDados.get('nome').markAllAsTouched();
      this.formDados.get('idade').markAllAsTouched();
      console.log("Form INVÁLIDO");
    } else {
      this.dadosForm = [
        { "nome": this.formDados.value.nome },
        { "idade": this.formDados.value.idade }
      ];
      
      console.log("Form VÁLIDO");
      console.log("Dados do Fromulário", this.dadosForm);
    }

  }

  ngOnInit() {
  }

}
