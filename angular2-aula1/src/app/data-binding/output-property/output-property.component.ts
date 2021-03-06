import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <div>
      <button type="button" class="btn btn-primary"
        (click)="decrementa()">-</button>
      <input type="text" [value]="valor" readonly />
      <button type="button" class="btn btn-primary"
        (click)="incrementa()">+</button>
    </div>
  `,
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor });
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor });
  }

}
