import { FormControl } from '@angular/forms';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  public textoDaLabel = '';
  public idCampo = '';
  @Input()	campo	=	new	FormControl();

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const campo = this.elemento.nativeElement.querySelector('input')
    this.textoDaLabel = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
    this.idCampo = campo.name;
  }


}
