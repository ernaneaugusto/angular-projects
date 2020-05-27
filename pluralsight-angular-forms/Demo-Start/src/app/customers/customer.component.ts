import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customer = new Customer();
  public testData: boolean = false;

  /**
   * 
   * Para usar algumas maneiras para acessar as propriedades de um reactive form:
   * 
   * >>> 1- Pela propriedade customerForm:
   * Ex: customerForm.controls.nomeDaPropriedade.valid
   * 
   * >>> 2- Utilizando o metodo get('nomeDaPropriedade').valid
   * Ex: customerForm.get('nomeDaPropriedade').valid
   * 
   * >>> 3- Criar uma propriedade na classe para do tipo FormControl():
   * Ex: public nomeDaPropriedade = new FromControl()
   * 
   */
  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    })
  }

  public save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  public populateTestData() {
    // setValue: utilizado para alterar todos os campos do formulario
    // this.customerForm.setValue({
    //   firstName: 'FirstName setValue',
    //   lastName: 'Lastname setValue',
    //   email: 'E-mail setValue',
    //   sendCatalog: false
    // });

    // patchValue: utilizado para alterar apenas alguns campos do formulario    
    this.customerForm.patchValue({
      firstName: 'FirstName setValue',
      lastName: 'Lastname setValue'
    });

    this.testData = true;
  }
}
