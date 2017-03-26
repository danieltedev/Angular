import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean;
  tamanhoFonte: number;

  constructor() {
    this.tamanhoFonte = 10;
  }

  ngOnInit() { }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
