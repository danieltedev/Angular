import { Injectable } from '@angular/core';

@Injectable()
export class CurosoService {

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor() { }

  getCursos () {
    return this.cursos;
  }

  addCurso (curso: string) {
    this.cursos.push(curso);
  }

}
