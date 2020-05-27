import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Modelo para criacao de reactive forms com FormGroup
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true),
    // });


    /**
     * Modelo de configuracoes para o FormBuilder(as chaves do objeto sao os identificadores utilizados na propriedade formControlName):
     * 
     * >>> Exemplo 1:
     *  this.customerFrom = this.fb.group({
     *    firstName: '',
     *    sendCatalog: true
     * })
     * 
     * >>> Exemplo 2:
     *  this.customerFrom = this.fb.group({
     *    firstName: '',
     *    email: false
     * });
     * 
     * >>> Exemplo 2:
     *  this.customerFrom = this.fb.group({
     *    firstName: { value: 'Joao', disabled: true },
     *    email: { value: '', disabled: false }
     * });
     * 
     * >>> Exemplo 3:
     *  this.customerFrom = this.fb.group({
     *    firstName: [''],
     *    email: [{ value: '', disabled: false }]
     * })
     */

    this.customerForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      lastName: [
        '',
        [Validators.required, Validators.maxLength(50)]
      ],
      email: [
        '',
        [Validators.required]
      ],
      sendCatalog: [
        true,
        []
      ]
    });
  }

  public save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  public populateTestData() {
    // setValue: utilizado para alterar todos os campos do formulario
    this.customerForm.setValue({
      firstName: 'FirstName setValue',
      lastName: 'Lastname setValue',
      email: 'E-mail setValue',
      sendCatalog: false
    });

    // patchValue: utilizado para alterar apenas alguns campos do formulario    
    // this.customerForm.patchValue({
    //   firstName: 'FirstName patchValue',
    //   lastName: 'Lastname patchValue'
    // });

    this.testData = true;
  }
}
