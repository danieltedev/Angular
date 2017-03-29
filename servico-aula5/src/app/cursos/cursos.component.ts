import { Component, OnInit } from '@angular/core';

import { CurosoService } from '../shared/curoso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: String[];

  constructor(private cursosService: CurosoService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
