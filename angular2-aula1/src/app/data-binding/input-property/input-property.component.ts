import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  template: '{{ nomeCurso }}',
  styleUrls: ['./input-property.component.css']
  // inputs: ['nomeCurso:nome']
})

export class InputPropertyComponent {

  @Input() nomeCurso = '';

  constructor() { }

}
