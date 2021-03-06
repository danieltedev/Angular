import { Component, OnInit } from '@angular/core';

import { CurosoService } from '../shared/curoso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [
    CurosoService
  ]
})
export class CriarCursoComponent implements OnInit {

  cursos: String[];

  constructor(private cursosService: CurosoService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.emitirCursoCriado.subscribe(
      // function(curso){
      //   console.log(curso);
      // }
      // escrever o mesmo codigo acima de uma forma mais elegante
      curso => console.log(curso)
    );
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

}
