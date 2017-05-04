import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { AlunosService } from "app/alunos/alunos.service";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  aluno: any;
  incricao: Subscription;

  constructor(
    private alunoService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunoService.getAlunoId(this.id);
      }
    )

    if(this.aluno == null){
      this.router.navigate(['/naoEncontrado']);
    }
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

}
