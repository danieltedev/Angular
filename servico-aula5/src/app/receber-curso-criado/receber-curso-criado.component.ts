import { Component, OnInit } from '@angular/core';

import { CurosoService } from '../shared/curoso.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: CurosoService) { }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
