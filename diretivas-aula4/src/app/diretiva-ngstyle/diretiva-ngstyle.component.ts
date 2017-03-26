import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean;
  tamanhoFonte: number;

  constructor() { }

  ngOnInit() {
    this.tamanhoFonte = 10;
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
