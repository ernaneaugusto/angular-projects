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

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
