import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class CurosoService {

  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos () {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso (curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CurosoService.criouNovoCurso.emit(curso);
  }

}
