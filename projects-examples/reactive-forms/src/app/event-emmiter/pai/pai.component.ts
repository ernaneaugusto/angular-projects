import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  // valor do componente PAI que armazenara os valores emitidos pelo componente FILHO
  public valueOfChild: number = 0;

  constructor() { }

  // funcao que o componente FILHO chamara para informar a emissao de um novo evento/valor
  public onNewCounterEmit(event) {
    this.valueOfChild = event;
  }

  ngOnInit() { }

}
