import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]*/
})

export class DataBindingComponent {

  url = 'https://facebook.com';
  urlImg = 'http://lorempixel.com/400/200/sports/';
  conteudoAtual = '';
  conteudoSalvo = '';
  isMouseOver = false;
  nome = 'Teste';
  pessoa = {nome: '', idade: 18};
  nomeCurso = 'Curso de Angula';

  constructor() { }

  getValor() {
    return 1;
  }

  onClick() {
    alert('botão clicado!');
  }

  onKeyup(event: KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event) {
    console.log(event);
  }

}
