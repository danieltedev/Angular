import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { AlunosService } from "app/alunos/alunos.service";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: any;
  incricao: Subscription;
  private formMudou: boolean;

  constructor(
    private alunoService: AlunosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunoService.getAlunoId(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if(this.formMudou) {
      confirm('tem certeza que deseja sair dessa página?');
    }

    return true;
  }

}
