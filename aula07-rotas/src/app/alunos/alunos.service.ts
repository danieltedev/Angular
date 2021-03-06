import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[];

  constructor() { 
    this.alunos = [
      {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
      {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
      {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
    ];
  }

  getAlunos() {
    return this.alunos;
  }

  getAlunoId(id: number) {
    let alunos = this.getAlunos();
    for(let aluno of alunos){
      if(id == aluno.id){
        return aluno;
      }
    }
  }

}
