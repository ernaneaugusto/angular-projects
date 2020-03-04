import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  // atributo de entrada do componente FILHO para receber dados do componente PAI
  @Input() public counter: number;

  // atributo de output emissor de evento do componente FILHO para o PAI
  @Output() public newCounterEmit = new EventEmitter();

  constructor() { }

  // incrementa o contador
  public incrementCounter() {
    this.counter++;
    this.newCounterEmit.emit(this.counter);
  }

  // decrementa o contador
  public decrementCounter() {
    this.counter--;
    this.newCounterEmit.emit(this.counter);
  }

  ngOnInit() { }

}
