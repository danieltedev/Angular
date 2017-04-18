import { Component, OnInit } from '@angular/core';

import { CursoService } from "./curso.service";

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: any[];

  constructor(private cursosService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
